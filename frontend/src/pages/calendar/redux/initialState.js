import moment from 'moment';

// let now = moment();
// let day = moment().get('day');
// let week = day.get('week');
// let activeWeek = (day === 0) ? week - 1 : week;

const initialState = {
    activeWeek: 0,
    weeks: []
};

export default initialState;
