import {takeEvery, put} from 'redux-saga/effects';

import {REDUX_ACTION_NAMES, STORAGE_ACCESS, LITERALS} from '../../config';

const {APPLY_SERIALIZED_STATE, CHECK_SERIALIZED_STATE} = REDUX_ACTION_NAMES;

export default function* () {
    yield takeEvery(CHECK_SERIALIZED_STATE, recoverSerializedState);
}

function* recoverSerializedState() {

    try {
        const serializedState = STORAGE_ACCESS.get(LITERALS.STORAGE_STATE_KEY);

        if (serializedState) {
            yield put({type: APPLY_SERIALIZED_STATE, payload: JSON.parse(serializedState)})
        }
    } catch (error) {
        console.error(`Failed to recover state from storage, ${error}`);
    }
}