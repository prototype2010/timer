import {REDUX_ACTION_NAMES} from '../../config';

const {APPLY_SERIALIZED_STATE} = REDUX_ACTION_NAMES;

export default function (state = {}, action) {

    const {type, payload} = action;

    switch (type) {

        case APPLY_SERIALIZED_STATE : {
            return {...payload.applicationState};
        }

        default : {
            return {...state};
        }
    }
};