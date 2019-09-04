// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import fetchIntercept from 'fetch-intercept';
// import { changeURL } from 'lib/utils/replace-url';

// Global Styles
// import 'stylesheets/globals.scss';

// Store
import store from './store';

// Application Start dependencies
// import 'react-app/build-info';
// import 'react-app/dependency';

// actions
import triggerPageActions from './actions/pageActions';

import ErrorBoundary from '../shared/components/common/ErrorBoundary';
import componentMap from './componentMap';

/* eslint-disable */

function getRequest(req, reqconfig) {
    return new Promise((resolve, reject) => {
        // Some business logic if required
        resolve([req, reqconfig]);
    });
}

/**
 * @description tries parsing the Response to see if
 * the provided reponse is an error response hidden in a sucess code
 * @param {Response} response the response object obtained from fetch
 * @param {boolean} isError check if the method was triggered from error
 * @param {Response} unReadResponse response to be resolved
 * @returns {Promise} a promise that resolves a cloned response object
 */
function validateResponse(response, isError, unReadResponse) {
    return new Promise((resolve, reject) => {
        // some business logic
        resolve(unReadResponse);
    });
}

fetchIntercept.register({
    request: async (req, reqconfig) => {
        return new Promise(async (resolve, reject) => {
            getRequest(req, reqconfig).then(obj => {
                resolve(obj);
            });
        });
    },
    requestError(error) {
        return error;
    },
    response(response) {
        if (response.clone) {
            const unReadResponse = response.clone();

            return validateResponse(response, false, unReadResponse);
        }
        return validateResponse(response, false, response);
    },
    responseError(errResponse) {
        if (errResponse.clone) {
            const unReadResponse = errResponse.clone();

            return validateResponse(errResponse, false, unReadResponse);
        }
        return validateResponse(errResponse, false, errResponse);
        
    }
});
/* eslint-disable */

// If needed write a util to change all the URLs in window object provided
// window.kohils = changeURL(objectPath.get(window, 'kohils', {}));

store.dispatch(triggerPageActions());

/**
 * @description this function renders the appropriate component at the selected node
 * @param {*} tag HTML tag to be replaced by the react component
 * @param {*} Comp A React Component to replace the HTML tag
 * @param {*} node HTMl node
 * @param {*} i index of the tag in array
 * @returns {void}
 */
function renderNode(tag, Comp, node, i) {
    const attrs = Array.prototype.slice.call(node.attributes);
    const props = {
        key: `${tag}-${i}`
    };

    attrs.map((attr) => {
        const words = attr.name.split('-');

        words.forEach((word, index) => {
            if (index !== 0) {
                words[index] = word.charAt(0).toUpperCase() + word.slice(1);
            }
        });
        const capWord = words.reduce((a, b) => a + b);

        props[capWord] = attr.value === '' ? true : attr.value;
        return null;
    });

    if (props.class) {
        props.className = props.class;
        delete props.class;
    }
    if (!node.attributes.bootstraped) {
        // If Lazy load cfor react tags is need then it has to be configured here
        ReactDOM.render(
            <Provider store={store}>
                <ErrorBoundary>
                    <Comp {...props} />
                </ErrorBoundary>
            </Provider>,
            node
        );

        node.setAttribute('bootstraped', true);
    }
}

/**
 * @description renders a React component for the given custom HTML tag
 * @param {*} tag HTML tag to be replaced by the react component
 * @param {*} Comp A React Component to replace the HTML tag
 * @returns {void}
 */
function render(tag, Comp) {
    document.createElement(tag);
    const nodes = Array.from(document.getElementsByTagName(tag));

    nodes.map((node, i) => renderNode(tag, Comp.comp, node, i));
    // return Comp;
}

/**
 * @description This will boot strap all the components with custom tags
 * @returns {void}
 */
function bootStrap() {
    Object.keys(componentMap).forEach(key => {
        render(key, componentMap[key]);
    });
}

/**
 * @callback
 * @description Listner for all the mutations
 * @param {array} mutationList list of all mutations that occurs on document
 * @returns {void}
 */
function mutationListner(mutationList) {
    let nodes;

    Object.keys(componentMap).forEach(key => {
        nodes = Array.from(document.getElementsByTagName(key));
        nodes.forEach(node => {
            if (!node.attributes.bootstraped) {
                render(key, componentMap[key]);
            }
        });
    });
}

// Observer for mutations
const observer = new MutationObserver(mutationListner);

// mutation options for which the observer listens
const config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
};

// starting the observer
observer.observe(document, config);

bootStrap();
