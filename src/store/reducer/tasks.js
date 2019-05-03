import moment from 'moment';
import {REDUX_ACTION_NAMES} from '../../config';

const {
    APPLY_SERIALIZED_STATE, SET_TASK_START_TIME, ADD_TASK, DELETE_TASK, SET_TASK_NAME, SET_TASK_END_TIME
} = REDUX_ACTION_NAMES;

const initialState = {
    startTime: null,
    endTime: null,
    taskName: '',
    tasksList: [],
};

export default function (state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case APPLY_SERIALIZED_STATE : {
            return {...payload.tasks};
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

        case ADD_TASK : {

            const {tasksList} = state;

            return {
                ...state,
                startTime: null,
                endTime: null,
                taskName: '',
                tasksList: [...tasksList, payload]
            }
        }

        case DELETE_TASK : {

            return {
                ...state,
                tasksList: state.tasksList.filter(({id}) => id !== payload)
            }
        }

        default : {
            return {...state};
        }
    }
};