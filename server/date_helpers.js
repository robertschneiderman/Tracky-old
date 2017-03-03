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

exports.formattedDate= date => {
    let month = months[date.getMonth()];
    let day = date.getDate();
    let ending = (day > 3) ? 'th' : numberEndings[day];
    let dayStrFull = `${day.toString()}${ending}`;
    return `${month} ${dayStrFull} ${date.getFullYear()}`;
};

exports.adjustedDay= day => {
    if (day === 0) return 6;
    return day - 1;
};


exports.artificialWeek = 10;