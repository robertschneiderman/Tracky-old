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

export const minutesToTime = (totalMinutes) => {
    return msToTime(totalMinutes * 60 * 1000);
};

export const msToLongerTime = (totalMilliSeconds) => {
    if (!totalMilliSeconds) return '';
    let duration = moment.duration(totalMilliSeconds);
    let decaSeconds = Math.floor(duration.milliseconds() / 10);        
    return msToTime(totalMilliSeconds) + `:${padNumber(duration.seconds())}:${padNumber(decaSeconds)}`;
};

export const hoursAndMinsToNumber = time => {
    let hours = parseInt(time.slice(0, 2));
    let minutes = parseInt(time.slice(3));
    return (hours * 60 + minutes);    
};

export const fullTimeToNumber = time => {
    let hours = parseInt(time.slice(0, 2));
    let minutes = parseInt(time.slice(3, 5));
    let seconds = parseInt(time.slice(5, 7));
    return (hours * 3660 + minutes * 60 + seconds);
    // WORKING ON INCREMENTING TIME TASKS... CHANGING TIME TASKS TO STORE SECONDS AS OPPOSED TO MINUTES
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

export const secondsToTimeString = seconds => {
    seconds = parseInt(seconds);
    let hours = Math.floor(moment.duration(seconds, 'seconds').get('hours'));
    let minutes = Math.floor(moment.duration(seconds, 'seconds').get('minutes'));
    return (hours > 0) ? `${hours}h ${minutes}m` : `${minutes}m`;
};