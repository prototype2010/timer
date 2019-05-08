import {takeLatest, delay, select} from 'redux-saga/effects';
import {LITERALS, STORAGE_ACCESS, REDUX_ACTION_NAMES} from '../../config';

const {ADD_TASK,SET_TASK_START_TIME,DELETE_TASK,SET_TASK_NAME} = REDUX_ACTION_NAMES;

function* serializeState() {
    yield delay(300);

    const state = yield select();
    STORAGE_ACCESS.set(LITERALS.STORAGE_STATE_KEY, JSON.stringify(state));
}

export default function* () {
    yield takeLatest([ADD_TASK, SET_TASK_START_TIME, DELETE_TASK, SET_TASK_NAME], serializeState);
}