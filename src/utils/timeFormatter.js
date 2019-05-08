import moment from 'moment';
import { TIME_OUTPUT_FORMAT } from '../config';

export function getFormattedDifference(
  momentDateStart,
  momentDateNow = moment()
) {
  const hours = moment(momentDateNow).diff(momentDateStart, 'hours');
  const minutes = moment(momentDateNow).diff(momentDateStart, 'minutes') % 60;
  const seconds = moment(momentDateNow).diff(momentDateStart, 'seconds') % 60;

  return [hours, minutes, seconds]
    .map(timeParam => formatToTwoDigits(timeParam))
    .join(':');
}

export function formatToTwoDigits(timeParam) {
  return `${timeParam}`.length < 2 ? `0${timeParam}` : timeParam;
}

export function formatDate(momentDate) {
  return moment(momentDate).format(TIME_OUTPUT_FORMAT.TABLE_DATE_FORMAT);
}
