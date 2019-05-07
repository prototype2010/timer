import {select, put} from 'redux-saga/effects';

import {REDUX_ACTION_NAMES} from '../../config';
import {generateNextId} from '../../utils/generateNextId';

const {SET_TASK_END_TIME, ADD_TASK} = REDUX_ACTION_NAMES;

export default function* () {

    yield put({type: SET_TASK_END_TIME});

    const {currentTask, tasksList} = yield select();
    const {tasks} = tasksList;
    const {startTime, endTime, taskName} = currentTask;

    yield put({
        type: ADD_TASK,
        payload: {
            id: generateNextId(tasks),
            startTime,
            endTime,
            taskName,
        }
    });
}