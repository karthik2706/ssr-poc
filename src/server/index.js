import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import configureStore from "../shared/configureStore";
import App from "../shared/App";
import "source-map-support/register";
import Constants from "../shared/Constants";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
    const store = configureStore({ server: { reqUrl: req.url } });
    const promises = routes.reduce((acc, route) => {
        if (
            matchPath(req.url, route) &&
            route.component &&
            route.component.initialActions
        ) {
            const actionMethods = route.component.initialActions();
            for (var i = 0; i < actionMethods.length; i++) {
                acc.push(Promise.resolve(store.dispatch(actionMethods[i])));
            }
        }
        return acc;
    }, []);

    Promise.all(promises)
        .then(() => {
            const context = {};
            const gigyaURL = Constants.AEM_URL + "/etc/designs/gigya/social_gigya.js";
            const logoutURL = Constants.AEM_URL + "/etc/designs/platform/foundation/gcmd.json/logout";
            const providerURL = Constants.AEM_URL + "/content/entities/user_account/provider.caas.json";
            const markup = renderToString( <
                Provider store = { store } >
                <
                StaticRouter location = { req.url }
                context = { context } >
                <
                App / >
                <
                /StaticRouter> < /
                Provider >
            );

            let initialData = store.getState();
            if (initialData.server) {
                delete initialData.server;
            }

            res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>KOHL'S</title>
            <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <link href="/assets/styles/main.css" rel="stylesheet">
            <script src="/bundle.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
          <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
          
          <script>
                $(document).on('social-login-complete', function(){
                   window.location.reload();
                });
                $(document).on('social-logout-complete', function(){
                  window.location.reload();
               });
          </script>
        </html>
      `);
        })
        .catch(next);
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening", process.env.PORT || 8080);
});