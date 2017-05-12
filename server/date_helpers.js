var moment = require('moment');
var tz = require('moment-timezone');

const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

const numberEndings = {
    1: 'st',
    2: 'nd',
    3: 'rd',
};

exports.today = () => {
    const ROOT_URL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'https://traky.herokuapp.com';
    
    return (ROOT_URL) === 'production' ? moment() : moment().add(10, 'days');
};

exports.formattedDate= date => {
    let month = months[date.getMonth()];
    let day = date.getDate();
    let ending = (day > 3) ? 'th' : numberEndings[day];
    let dayStrFull = `${day.toString()}${ending}`;
    return `${month} ${dayStrFull} ${date.getFullYear()}`;
};

exports.adjustedDay= day => {
    day = day || exports.today().get('day');
    if (day === 0) return 6;
    return day - 1;
};

exports.adjustedWeek= () => {
    let date = exports.today().tz("America/Los_Angeles").startOf('day');
    let day = date.get('day');
    let week = date.get('week');

    if (day === 0) return week - 1;
    return week;
};

exports.getStartOfWeek = week => {
    let today = exports.today();
    let weekAdjustedDay = week ? today.week(week) : today;
    let dayToUse = weekAdjustedDay.get('day') !== 0 ? weekAdjustedDay : weekAdjustedDay.subtract(1, 'days');

    return dayToUse.startOf('week').add(1, 'days').format('YYYY-MM-DDTHH:mm:ss.SSS');
};

exports.getEndOfWeek = (week) => {
    let today = exports.today();
    let weekAdjustedDay = week ? today.week(week) : today;
    let dayToUse = weekAdjustedDay.get('day') !== 0 ? weekAdjustedDay : weekAdjustedDay.subtract(1, 'days');

    return dayToUse.endOf('week').add(1, 'days').format('YYYY-MM-DDTHH:mm:ss.SSS');    
};

const padNumber = (number) => {
    return (number < 10) ? `0${number}` : number;
};

const msToTime = (totalMilliSeconds) => {
    let duration = moment.duration(totalMilliSeconds);
    return `${padNumber(duration.hours())}:${padNumber(duration.minutes())}`;
};

exports.minutesToTime = (totalMinutes) => {
    return msToTime(totalMinutes * 60 * 1000);
};

exports.isSameWeek = (date1, date2) => {
    return moment(date1).get('week') === moment(date2).get('week');
};

exports.isSameDay = (date1, date2) => {
    return moment(date1).format('MM-DD-YYYY') === moment(date2).format('MM-DD-YYYY');
};