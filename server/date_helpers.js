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
    
    return (ROOT_URL) === 'production' ? moment() : moment().add(5, 'days');
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