import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/bill';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
    (createStore);

const store = createStoreWithMiddleware(rootReducer);
export default store;
