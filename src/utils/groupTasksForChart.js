const moment = require('moment');

export function groupTasksForChart(tasksArray = []) {
  const groupedByHours = groupByHours(tasksArray);

  return coerceTasksToMinutes(groupedByHours);
}

export function formChartBars(tasksGroupedArray) {
  return tasksGroupedArray.map(([hour, tasksArray = []]) => ({
    name: moment()
      .set('hour', hour)
      .minutes(0)
      .second(0)
      .format('HH:mm'),
    ...tasksArray.reduce(
      (cumulative, { id, timeSpent }) => ({
        ...cumulative,
        [id]: timeSpent
      }),
      {}
    )
  }));
}

function coerceTasksToMinutes(tasksObject) {
  return Object.entries(tasksObject).map(([index, tasksArray]) => [
    index,
    tasksArray.map(task => convertTaskToMinutesRange(task, index))
  ]);
}

function coerceTaskTimeToCurrentHour(time, currentHour) {
  let taskTime = moment(time);

  if (taskTime.get('hour') === currentHour) {
    return taskTime;
  } else if (taskTime.get('hour') < currentHour) {
    return taskTime
      .set('hour', currentHour)
      .minutes(0)
      .second(0);
  } else {
    return taskTime
      .set('hour', currentHour)
      .add(1, 'hours')
      .minutes(0)
      .second(0);
  }
}

function convertTaskToMinutesRange(
  { id, startTime, endTime, taskName },
  currentHour
) {
  const hourStartTime = coerceTaskTimeToCurrentHour(startTime, +currentHour);
  const hourEndTime = coerceTaskTimeToCurrentHour(endTime, +currentHour);
  const timeSpent = hourEndTime.diff(hourStartTime, 'minutes');

  return {
    id,
    startTime,
    endTime,
    taskName,
    timeSpent
  };
}

function groupByHours(tasksArray) {
  return tasksArray.reduce((cumulative, current) => {
    const { startTime, endTime } = current;

    let startHour = moment(startTime).hour();
    let endHour = moment(endTime).hour();

    if (startHour === endHour) {
      makeArrayAndPush(cumulative, startHour, current);
    } else {
      while (startHour <= endHour) {
        makeArrayAndPush(cumulative, startHour, current);
        startHour++;
      }
    }

    return cumulative;
  }, {});
}

function makeArrayAndPush(object, index, task) {
  if (Array.isArray(object[index])) {
    object[index].push(task);
  } else {
    object[index] = [task];
  }
}
