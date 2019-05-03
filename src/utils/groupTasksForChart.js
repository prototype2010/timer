import moment from 'moment';

const tasksStub = [{
    "id": 1,
    "startTime": "Fri May 03 2019 00:00:00 GMT+0300",
    "endTime": "Fri May 03 2019 01:27:00 GMT+0300",
    "taskName": "UhnCuUs7Ke"
}, {
    "id": 2,
    "startTime": "Fri May 03 2019 01:28:00 GMT+0300",
    "endTime": "Fri May 03 2019 02:21:00 GMT+0300",
    "taskName": "SiZVRibhIa"
}, {
    "id": 3,
    "startTime": "Fri May 03 2019 02:21:00 GMT+0300",
    "endTime": "Fri May 03 2019 02:58:00 GMT+0300",
    "taskName": "nyxiP6HRfh"
}, {
    "id": 4,
    "startTime": "Fri May 03 2019 03:01:00 GMT+0300",
    "endTime": "Fri May 03 2019 03:26:00 GMT+0300",
    "taskName": "EGMStlFFDz"
}, {
    "id": 5,
    "startTime": "Fri May 03 2019 03:29:00 GMT+0300",
    "endTime": "Fri May 03 2019 04:19:00 GMT+0300",
    "taskName": "AxvgAL1Ypo"
}, {
    "id": 6,
    "startTime": "Fri May 03 2019 04:23:00 GMT+0300",
    "endTime": "Fri May 03 2019 04:51:00 GMT+0300",
    "taskName": "593ENC6SOl"
}, {
    "id": 7,
    "startTime": "Fri May 03 2019 04:53:00 GMT+0300",
    "endTime": "Fri May 03 2019 05:25:00 GMT+0300",
    "taskName": "lw6o819pPy"
}, {
    "id": 8,
    "startTime": "Fri May 03 2019 05:33:00 GMT+0300",
    "endTime": "Fri May 03 2019 06:55:00 GMT+0300",
    "taskName": "GHvSiOPje6"
}, {
    "id": 9,
    "startTime": "Fri May 03 2019 07:04:00 GMT+0300",
    "endTime": "Fri May 03 2019 08:26:00 GMT+0300",
    "taskName": "0jwMH8lUQF"
}, {
    "id": 10,
    "startTime": "Fri May 03 2019 08:28:00 GMT+0300",
    "endTime": "Fri May 03 2019 09:12:00 GMT+0300",
    "taskName": "ifqfVuXLDD"
}, {
    "id": 11,
    "startTime": "Fri May 03 2019 09:14:00 GMT+0300",
    "endTime": "Fri May 03 2019 09:52:00 GMT+0300",
    "taskName": "oJp4vbs78C"
}, {
    "id": 12,
    "startTime": "Fri May 03 2019 09:52:00 GMT+0300",
    "endTime": "Fri May 03 2019 10:46:00 GMT+0300",
    "taskName": "D0ZE2VAkC7"
}, {
    "id": 13,
    "startTime": "Fri May 03 2019 10:53:00 GMT+0300",
    "endTime": "Fri May 03 2019 11:13:00 GMT+0300",
    "taskName": "tTP1xuOvSj"
}, {
    "id": 14,
    "startTime": "Fri May 03 2019 11:13:00 GMT+0300",
    "endTime": "Fri May 03 2019 11:58:00 GMT+0300",
    "taskName": "i5zYuNC7Wg"
}];

export default function (tasksArray = []) {

    const groupedByHours = groupByHours(tasksStub);

    console.log(groupedByHours);
}

function groupByHours(tasksArray) {
    return tasksArray.reduce((cumulative, current) => {

        const {startTime, endTime} = current;

        let startHour = moment(startTime).hour();
        let endHour = moment(endTime).hour();

        if (startHour === endHour) {
            makeArrayAndPush(cumulative, startHour, current)
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