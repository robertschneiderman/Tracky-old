import moment from 'moment';

export const dateToTime = (date) => {
    return moment(date).format('h:mm A');
};

export const padNumber = (number) => {
    return (number < 10) ? `0${number}` : number;
};

export const msToTime = (totalMilliSeconds) => {
    let duration = moment.duration(totalMilliSeconds);
    let hours = duration.hours();
    let minutes = duration.minutes();
    // debugger;
    return `${padNumber(hours)}:${padNumber(minutes)}`;
};

export const msToLongerTime = (totalMilliSeconds) => {
    let duration = moment.duration(totalMilliSeconds);
    let seconds = duration.seconds();
    let decaSeconds = Math.floor(duration.milliseconds() / 10);        
    return msToTime(totalMilliSeconds) + `:${padNumber(seconds)}:${padNumber(decaSeconds)}`;
};