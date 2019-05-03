import {select, put} from 'redux-saga/effects';

import {REDUX_ACTION_NAMES} from '../../config';
import {generateNextId} from '../../utils/generateNextId'

const {SET_TASK_END_TIME, ADD_TASK} = REDUX_ACTION_NAMES;

export default function* () {

    yield put({type: SET_TASK_END_TIME});

    const {tasks} = yield select();
    const {tasksList, startTime, endTime, taskName} = tasks;

    yield put({
        type: ADD_TASK,
        payload: {
            id: generateNextId(tasksList),
            startTime,
            endTime,
            taskName,
        }
    });
}