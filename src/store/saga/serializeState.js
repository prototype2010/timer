import {takeLatest, delay, select} from 'redux-saga/effects';
import {LITERALS, STORAGE_ACCESS} from '../../config';

function* serializeState() {

    yield delay(700);
    const state = yield select();

    STORAGE_ACCESS.set(LITERALS.STORAGE_STATE_KEY, JSON.stringify(state));
}

export default function* () {
    yield takeLatest('*', serializeState);
}