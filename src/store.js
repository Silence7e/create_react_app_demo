/**
 * Created by robin on 17/10/5.
 */
import {createStore, applyMiddleware, combineReducers} from 'redux';

import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from "redux-saga";
//import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

//import rootReducer from './modules';

import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
export const  history = createHistory();


//const initialState = {}
const enhancers = []

const middlewares = [
    sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
    let createLogger = require('redux-logger').createLogger;
    middlewares.push(createLogger());
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(combineReducers(reducers));

sagaMiddleware.run(sagas);

export default store