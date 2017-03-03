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
                    <h3 className="title-day"><strong>{date.format('ddd')}</strong></h3>
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