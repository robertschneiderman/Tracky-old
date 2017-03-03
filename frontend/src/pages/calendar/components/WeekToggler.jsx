import React, {Component} from 'react';
import moment from 'moment';

class WeekToggler extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e, inc) {
        let { dispatches, toggleWeek, dates } = this.props;
        let date = dates[1].subtract(inc, 'weeks');
        dispatches.requestAndToggleWeek(inc, date.get('week'));
    }

    render() {
        let { dates } = this.props;
        // debugger;
        let firstDate = dates[0];
        let lastDate = dates[dates.length-1];

        firstDate = moment(firstDate).format('MMM D');
        lastDate = moment(lastDate).format('MMM D');

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