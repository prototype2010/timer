import {compose, createStore, applyMiddleware} from 'redux';
import recoverSerializedState from './saga/recoverSerializedState';
import serializeState from './saga/serializeState';
import controlTaskFlow from './saga/controlTaskFlow';
import taskGenerator from './saga/taskGenerator';

import rootReducer from './reducer'
import reduxLogger from './middleware/logger';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router'


/* redux devtools */
export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer(history), composeEnhancers(applyMiddleware(reduxLogger, sagaMiddleware, routerMiddleware(history))));

[recoverSerializedState, serializeState, controlTaskFlow, taskGenerator]
    .forEach(saga => sagaMiddleware.run(saga));