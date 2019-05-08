import { REDUX_ACTION_NAMES } from '../../config';

const {
  APPLY_SERIALIZED_STATE,
  CONTROL_TASKS_FLOW,
  SET_TASK_START_TIME,
  ADD_TASK,
  TASK_NAME_CHANGE,
  SET_TASK_NAME,
  SET_TASK_END_TIME,
  DELETE_TASK,
  DELETE_ALL_TASKS,
  GENERATE_TASKS,
} = REDUX_ACTION_NAMES;

export const applySerializedState = serializedState =>
  formReduxAction(APPLY_SERIALIZED_STATE, serializedState);
export const controlTasksFlow = () => formReduxAction(CONTROL_TASKS_FLOW);
export const setTaskStartTime = time =>
  formReduxAction(SET_TASK_START_TIME, time);
export const addTask = task => formReduxAction(ADD_TASK, task);
export const handleTaskNameChange = name =>
  formReduxAction(TASK_NAME_CHANGE, name);
export const setTaskName = name => formReduxAction(SET_TASK_NAME, name);
export const setTaskEndTime = time => formReduxAction(SET_TASK_END_TIME, time);
export const deleteTask = id => formReduxAction(DELETE_TASK, id);
export const deleteAllTasks = () => formReduxAction(DELETE_ALL_TASKS);
export const generateTasks = () => formReduxAction(GENERATE_TASKS);

function formReduxAction(type, payload) {
  return {
    type,
    payload,
  };
}
