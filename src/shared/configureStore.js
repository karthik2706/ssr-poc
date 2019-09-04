import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import body from "./reducers/body";
import server from "./reducers/server";
import promotions from "./reducers/promotions";

const reducers = {
  body,
  server,
  promotions
}

// const window = window || null;

const rootreducer = combineReducers(reducers);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

const configureStore = preloadedState =>
  createStore(rootreducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
