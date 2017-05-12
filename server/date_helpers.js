var moment = require('moment');
var tz = require('moment-timezone');
const MomentRange = require('moment-range');


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
    return (process.env.NODE_ENV ) === 'production' ? exports.mowment().tz("America/Los_Angeles") : exports.mowment().add(0, 'days');
};

exports.mowment = date => {
    return date ? moment(date).tz("America/Los_Angeles") : moment().tz("America/Los_Angeles");
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
    let date = exports.today().startOf('day');
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
    return exports.mowment(date1).get('week') === exports.mowment(date2).get('week');
};

exports.isSameDay = (date1, date2) => {
    let momentRange = MomentRange.extendMoment(moment);
    // WORK ON THIS AREA!!!
    // date2 === now
    // let nextDay = exports.mowment(date1).add(1, 'days');
    // let nowFormatted = exports.mowment(date2).format('MM-DD-YYYY');
    // let dateFormatted = exports.mowment(date1).format('MM-DD-YYYY');
    // let nextDayFormatted = nextDay.format('MM-DD-YYYY');

    let v1 = moment(date2);
    let v2 = moment(date2);

    let theDay = v1.hours() >= 4 ? v1 : v1.subtract(1, 'days');
    let theDay2 = v2.hours() >= 4 ? v2 : v2.subtract(1, 'days');

    let start = theDay.startOf('day');
    let end = theDay2.add(1, 'days');
    end = end.hours(3).minutes(59).seconds(59);

    let range = momentRange.range(start, end);

    return momentRange(date1).within(range);

    // return (date2.hours() >= 4 && dateFormatted === nowFormatted) ||
    // (date2.hours() < 4 && nextDayFormatted === nowFormatted);
};