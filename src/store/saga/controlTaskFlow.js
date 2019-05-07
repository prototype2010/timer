import {takeEvery, select, put, call} from 'redux-saga/effects';

import createTask from './createTask';
import {REDUX_ACTION_NAMES} from '../../config';

const {CONTROL_TASKS_FLOW, SET_TASK_START_TIME} = REDUX_ACTION_NAMES;

export default function* () {
    yield takeEvery(CONTROL_TASKS_FLOW, controlTasksFlow)
}

function* controlTasksFlow() {
    const {currentTask} = yield select();
    const {startTime} = currentTask;

    if (!startTime) {
        yield put({type: SET_TASK_START_TIME});
    } else {
        yield call(createTask);
    }
}