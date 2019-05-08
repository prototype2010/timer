import { select, put } from 'redux-saga/effects';
import { generateNextId } from '../../utils/generateNextId';
import { setTaskEndTime, addTask } from '../actions';

export default function*() {
  yield put(setTaskEndTime());

  const { currentTask, tasksList } = yield select();
  const { tasks } = tasksList;
  const { startTime, endTime, taskName } = currentTask;

  yield put(
    addTask({
      id: generateNextId(tasks),
      startTime,
      endTime,
      taskName
    })
  );
}
