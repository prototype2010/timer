import {takeEvery, put} from 'redux-saga/effects';
import moment from 'moment';
import {getRandomFromRange} from '../../utils/numbers';
import {REDUX_ACTION_NAMES, TASK_GENERATOR_SETTINGS} from '../../config';
import randomstring from 'randomstring';

import groupTasks from '../../utils/groupTasksForChart';

const {TASKS_NUMBER, TASKS_TIME, PAUSE_TIME} = TASK_GENERATOR_SETTINGS;
const {
    ADD_TASK,
    GENERATE_TASKS,
    DELETE_ALL_TASKS
} = REDUX_ACTION_NAMES;


export default function* () {
    yield takeEvery(GENERATE_TASKS, generateTasks)
}

function* generateTasks() {

    yield put({type: DELETE_ALL_TASKS});

    const tasksToGenerate = getRandomFromRange(TASKS_NUMBER.from, TASKS_NUMBER.to);
    let currentTime = moment().startOf('day');
    let currentTaskId = 1;

    for (let i = 0; i < tasksToGenerate; i++) {

        const taskTime = getRandomFromRange(TASKS_TIME.from, TASKS_TIME.to);
        const pauseAfterTask = getRandomFromRange(PAUSE_TIME.from, PAUSE_TIME.to);

        yield put({
            type: ADD_TASK,
            payload: {
                id: currentTaskId++,
                startTime: currentTime.toString(),
                endTime: currentTime.add(taskTime,'minutes').toString(),
                taskName: randomstring.generate(10),
            }
        });

        currentTime.add(pauseAfterTask, 'minutes')
    }

    // TEST THING;
    groupTasks();
}