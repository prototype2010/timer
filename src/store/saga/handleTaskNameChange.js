import {takeLatest, delay, put} from 'redux-saga/effects';
import {REDUX_ACTION_NAMES} from '../../config';
import {setTaskName} from '../actions';

const {TASK_NAME_CHANGE} = REDUX_ACTION_NAMES;

function* serializeState({payload}) {
    yield delay(700);
    yield put(setTaskName(payload))
}

export default function* () {
    yield takeLatest(TASK_NAME_CHANGE, serializeState);
}