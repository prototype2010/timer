import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import applicationState from './applicationState';
import currentTask from './currentTask';
import tasksList from './tasksList';

export default function(history) {
  return combineReducers({
    router: connectRouter(history),
    applicationState,
    currentTask,
    tasksList,
  });
}
