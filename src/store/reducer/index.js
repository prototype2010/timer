import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

import applicationState from './applicationState';
import tasks from './tasks';

export default function (history) {
    return combineReducers({
        router: connectRouter(history),
        applicationState,
        tasks
    });
}