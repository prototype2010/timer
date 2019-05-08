const { groupTasksForChart } = require('../utils/groupTasksForChart');

/* this object should be splitted to three tasks and shown in three hours */
const testObject = {
  id: 4,
  startTime: 'Sat May 04 2019 02:30:00 GMT+0300',
  endTime: 'Sat May 04 2019 04:30:00 GMT+0300',
  taskName: 'KmLDRRMB6U'
};

const splittedObject = groupTasksForChart([testObject]);

test('should be splitted into three hours', () => {
  expect(splittedObject.length).toBe(3);
});

test('should be splitted into 2 3 4 hours, as task will be logged in them all', () => {
  expect(splittedObject.map(([hour]) => hour).join(',')).toBe('2,3,4');
});

test('task takes 120 minutes and should be splitted as 30, 60, 30', () => {
  expect(splittedObject.map(([, [{ timeSpent }]]) => timeSpent).join(',')).toBe(
    '30,60,30'
  );
});

console.log(JSON.stringify(splittedObject));
