import {takeLatest, delay, put} from 'redux-saga/effects';
import {REDUX_ACTION_NAMES} from '../../config';

const {TASK_NAME_CHANGE, SET_TASK_NAME} = REDUX_ACTION_NAMES;

function* serializeState({payload}) {
    yield delay(700);
    yield put({type: SET_TASK_NAME, payload})
}

export default function* () {
    yield takeLatest(TASK_NAME_CHANGE, serializeState);
}