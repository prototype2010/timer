import moment from 'moment';
import {REDUX_ACTION_NAMES} from '../../config';

const {
    SET_TASK_START_TIME,
    SET_TASK_NAME,
    SET_TASK_END_TIME,
    ADD_TASK,
    APPLY_SERIALIZED_STATE
} = REDUX_ACTION_NAMES;

const initialState = {
    startTime: null,
    endTime: null,
    taskName: '',
};

export default function (state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case APPLY_SERIALIZED_STATE : {
            return {...payload.currentTask};
        }

        case ADD_TASK : {
            return initialState;
        }

        case SET_TASK_NAME : {
            return {...state, taskName: payload}
        }

        case SET_TASK_START_TIME : {
            return {...state, startTime: payload || moment()}
        }

        case SET_TASK_END_TIME : {
            return {...state, endTime: payload || moment()}
        }

        default : {
            return state;
        }
    }
};