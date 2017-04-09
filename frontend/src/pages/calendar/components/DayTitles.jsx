import React, {Component} from 'react';
import moment from 'moment'
class DayTitles extends Component {
    constructor(props) {
        super(props);
    }

    getDates() {
        let { week } = this.props;
        let dates = [];
        if (week[0]) {
            for (let i = 0; i <= 6; i++) {
                let startOfWeek = moment(week[0].date);
                let date = i === 0 ? startOfWeek : startOfWeek.add(i, 'days');
                dates.push(date)
            }
        }
        return dates;
    }    

    renderDayTitles() {
        let { week } = this.props;
        // let first week[0]
        let dates = this.getDates();
        return dates.map((date, i) => {
            // debugger;
            return (
                <div className="c-day-title" key={`nvw-${i}`}>
                    <h3 className="title-day">{date.format('ddd')}</h3>
                    <span className="chars-day-title-hypen"></span>
                    <h3 className="title-date">{date.format('Do')}</h3>
                </div>        
            );
        });
    }

    render() {
        return(
            <div className="c-day-titles">
                {this.renderDayTitles()}
            </div>
        );
    }
}

export default DayTitles;