import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from 'redux-thunk'
import {connectRouter, routerMiddleware} from "connected-react-router";
import history from '../routes/history'

const middlewares = [
    routerMiddleware(history),
    thunk,
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));
