import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import * as rootReducer from '../reducers';

const combinerRootReducer = combineReducers({
    ...rootReducer
});

/**
 * Render Component.
 * @returns {object} creates and returns store
 */
export default function configureStore() {
    const middleware = [thunk];

    let composeEnhancers;

    if (process.env.NODE_ENV !== 'production') {
        /* eslint-disable global-require */
        const { logger } = require('redux-logger');

        middleware.push(logger);

        const { composeWithDevTools } = require('redux-devtools-extension');

        composeEnhancers = composeWithDevTools({
            // Specify here name, actionsBlacklist, actionsCreators and other options if needed
        });
    }

    const finalEnhancer = composeEnhancers || compose;
    const store = createStore(combinerRootReducer, finalEnhancer(applyMiddleware(...middleware)));

    return store;
}
