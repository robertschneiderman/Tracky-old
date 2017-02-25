import moment from 'moment';

export const dateToTime = (date) => {
    return moment(date).format('h:mm A');
};

export const padNumber = (number) => {
    return (number < 10) ? `0${number}` : number;
};

export const msToTime = (totalMilliSeconds) => {
    let duration = moment.duration(totalMilliSeconds);
    return `${padNumber(duration.hours())}:${padNumber(duration.minutes())}`;
};

export const msToLongerTime = (totalMilliSeconds) => {
    let duration = moment.duration(totalMilliSeconds);
    let seconds = duration.seconds();
    let decaSeconds = Math.floor(duration.milliseconds() / 10);        
    return msToTime(totalMilliSeconds) + `:${padNumber(seconds)}:${padNumber(decaSeconds)}`;
};

export const hoursAndMinsToNumber = time => {
    let hours = parseInt(time.slice(0, 2));
    let minutes = parseInt(time.slice(3));
    return (hours * 60 + minutes);    
};

export const firstDayOfWeek = () => {
  let result = moment().day(1).startOf('day');
  if (moment().day() === 0) result.subtract('days', 7);
  return result;
};

export const minutesPassedInDay = () => {
  return Math.floor(moment.duration(moment().unix() - moment().startOf('day').unix(), 'seconds').asMinutes());
};

export const hoursPassedSince = date => {
  return Math.floor(moment.duration(moment().unix() - date.unix(), 'seconds').asHours());
};

export const firstDayOfMonth = () => {
    return moment().startOf('month');
};

export const daysInMonth = () => {
  return moment().endOf('month').date();
};