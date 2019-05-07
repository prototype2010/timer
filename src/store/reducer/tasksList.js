import {REDUX_ACTION_NAMES} from '../../config';

const {
    ADD_TASK,
    DELETE_TASK,
    DELETE_ALL_TASKS,
    APPLY_SERIALIZED_STATE
} = REDUX_ACTION_NAMES;

const initialState = {
    tasks: [],
};

export default function (state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case APPLY_SERIALIZED_STATE : {
            return {...payload.tasksList};
        }

        case ADD_TASK : {
            return {
                tasks: [...state.tasks, payload]
            }
        }

        case DELETE_TASK : {
            return {
                tasks: state.tasks.filter(({id}) => id !== payload)
            }
        }

        case DELETE_ALL_TASKS : {
            return {
                tasks: []
            }
        }

        default : {
            return state;
        }
    }
};