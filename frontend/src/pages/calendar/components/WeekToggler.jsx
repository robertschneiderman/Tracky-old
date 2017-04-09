import React, {Component} from 'react';
import moment from 'moment';

class WeekToggler extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e, inc) {
        let { dispatches, toggleWeek, week } = this.props;
        let weekNum = week[0].week;
        // debugger;
        // let date = dates[1].subtract(inc, 'weeks');
        dispatches.requestAndToggleWeek(inc, weekNum);
    }

    render() {
        let { dates } = this.props;
        // debugger;
        let firstDate = dates[0];
        let lastDate = dates[dates.length-1];

        firstDate = moment(firstDate).format('MMM Do');
        lastDate = moment(lastDate).format('MMM Do');

        return(
            <div className="w-week-toggler">
                <button className="btn-week-toggler" onClick={e => this.handleClick(e, 1)}>&lt;</button>
                <h3 className="title-week-toggler">{firstDate} - {lastDate}</h3>
                <button className="btn-week-toggler" onClick={e => this.handleClick(e, -1)}>&gt;</button>
            </div>
        );
    }
}

export default WeekToggler;