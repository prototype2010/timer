import { takeEvery, put } from 'redux-saga/effects';
import moment from 'moment';
import randomstring from 'randomstring';
import { addTask, deleteAllTasks } from '../actions';
import { getRandomFromRange } from '../../utils/numbers';
import { REDUX_ACTION_NAMES, TASK_GENERATOR_SETTINGS } from '../../config';

const { TASKS_NUMBER, TASKS_TIME, PAUSE_TIME } = TASK_GENERATOR_SETTINGS;
const { GENERATE_TASKS } = REDUX_ACTION_NAMES;

export default function*() {
  yield takeEvery(GENERATE_TASKS, generateTasks);
}

function* generateTasks() {
  yield put(deleteAllTasks());

  const tasksToGenerate = getRandomFromRange(
    TASKS_NUMBER.from,
    TASKS_NUMBER.to,
  );
  let currentTime = moment().startOf('day');
  let currentTaskId = 1;

  for (let i = 0; i < tasksToGenerate; i++) {
    const taskTime = getRandomFromRange(TASKS_TIME.from, TASKS_TIME.to);
    const pauseAfterTask = getRandomFromRange(PAUSE_TIME.from, PAUSE_TIME.to);

    yield put(
      addTask({
        id: currentTaskId++,
        startTime: currentTime.toString(),
        endTime: currentTime.add(taskTime, 'minutes').toString(),
        taskName: randomstring.generate(10),
      }),
    );

    currentTime.add(pauseAfterTask, 'minutes');
  }
}
