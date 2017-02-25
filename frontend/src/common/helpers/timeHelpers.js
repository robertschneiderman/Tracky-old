import moment from 'moment';

export const dateToTime = (date) => {
    return moment(date).format('h:mm A');
};

export const padNumber = (number) => {
    return (number < 10) ? `0${number}` : number;
};

export const msToTime = (totalMilliSeconds) => {
    let duration = moment.duration(totalMilliSeconds);
    return `${padNumber(duration.hours)}:${padNumber(duration.minutes)}`;
};

export const msToLongerTime = (totalMilliSeconds) => {
    let duration = moment.duration(totalMilliSeconds);
    let seconds = duration.seconds();
    let decaSeconds = Math.floor(duration.milliseconds() / 10);        
    return msToTime(totalMilliSeconds) + `:${padNumber(seconds)}:${padNumber(decaSeconds)}`;
};

const hoursAndMinsToNumber = time => {
    let hours = parseInt(time.slice(0, 2));
    let minutes = parseInt(time.slice(3));
    return (hours * 60 + minutes);    
};