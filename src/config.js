export const REDUX_ACTION_NAMES = {
    CHECK_SERIALIZED_STATE: 'RECOVER_SERIALIZED_STATE',
    APPLY_SERIALIZED_STATE: 'APPLY_SERIALIZED_STATE',
    CONTROL_TASKS_FLOW: 'CONTROL_TASKS_FLOW',
    SET_TASK_START_TIME: 'SET_TASK_START_TIME',
    ADD_TASK: 'ADD_TASK',
    SET_TASK_NAME: 'SET_TASK_NAME',
    SET_TASK_END_TIME: 'SET_TASK_END_TIME',
    DELETE_TASK: 'DELETE_TASK'
};

export const LITERALS = {
    STORAGE_STATE_KEY: 'TIMER_SERIALIZED_STATE'
};

export const STORAGE_ACCESS = {
    set: (key, value) => localStorage.setItem(key, value),
    get: key => localStorage.getItem(key)
};

export const STYLES = {
    TEXT_COLOR: '#5148c7',
    LIGHT_BLUE: '#20c1d8',
    WARN_COLOR: '#bf2b5c',
    TABS_BACKGROUND : '#00bcd5'
};

export const ROUTER_PREFIXES = {
    TABLE: '/',
    CHART: 'chart',
    TASK: 'task'
};

export const TIME_OUTPUT_FORMAT = {
    TABLE_DATE_FORMAT : 'hh:mm:ss'
};