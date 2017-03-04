import React, {Component} from 'react';
class DayTitles extends Component {
    constructor(props) {
        super(props);
    }

    renderDayTitles() {
        let { dates } = this.props;
        return dates.map((date, i) => {
            return (
                <div className="c-day-title" key={`nvw-${i}`}>
                    <h3 className="title-day">{date.format('dd')}</h3>
                    <span className="chars-day-title-hypen">-</span>
                    <h3 className="title-date">{date.format('MMM D')}</h3>
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