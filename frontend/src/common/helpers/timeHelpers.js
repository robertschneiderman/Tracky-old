import moment from 'moment';

export const today = () => {
    const ROOT_URL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'https://traky.herokuapp.com';
    
    return (ROOT_URL) === 'production' ? moment() : moment().add(6, 'days');
};

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
    // debugger;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = Math.floor(totalMinutes - hours * 60);
    return `${padNumber(hours)}:${padNumber(minutes)}`;
};

export const msToLongerTime = (totalMilliSeconds) => {
    // if (!totalMilliSeconds) return '';
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

export const firstDayOfWeek = devDate => {
    // should technically use dev date    
  let result = moment(devDate).day(1).startOf('day');
  if (moment(devDate).day() === 0) result.subtract('days', 7);
  return result;
};


export const hoursPassedSince = date => {
  return Math.floor(moment.duration(today().unix() - date.unix(), 'seconds').asHours());
};

export const firstDayOfMonth = devDate => {
    // should technically use dev date    
    return today(devDate).startOf('month');
};

export const daysInMonth = devDate => {
    // should technically use dev date
  return today(devDate).endOf('month').date();
};

export const secondsToTimeString = seconds => {
    seconds = parseInt(seconds);
    let hours = Math.floor(moment.duration(seconds, 'seconds').get('hours'));
    let minutes = Math.floor(moment.duration(seconds, 'seconds').get('minutes'));
    return (hours > 0) ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const minutesElapsedInDay = () => {
    return moment.duration(moment().unix() - moment().startOf('day').unix(), 'seconds').asMinutes();    
};

export const minutesPassedInDay = () => {
  return Math.floor(moment.duration(moment().unix() - moment().startOf('day').unix(), 'seconds').asMinutes());
};

export const adjustedDay= day => {
    if (day === 0) return 6;
    return day - 1;
};

export const adjustedWeek = (day, week) => {
  if (day === 0) return week - 1;
  return week;
};