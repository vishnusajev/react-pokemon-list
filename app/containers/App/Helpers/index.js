import moment from 'moment';

export function parseDate(date) {
  const dateStr = moment(date);
  const dateComponent = dateStr.format(('MM/DD, H:mm'));
  return dateComponent;
}

export function getRandomColor() {
  // todo: Not perfect it can generate same color again.
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
