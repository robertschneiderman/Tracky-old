import React, {Component} from 'react';
import moment from 'moment'
class DayTitles extends Component {
    constructor(props) {
        super(props);
    }  

    renderDayTitles() {
        let { dates } = this.props;
        // let first week[0]
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