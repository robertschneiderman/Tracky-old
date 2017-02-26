import React, {Component} from 'react';
import TimeBlock from './TimeBlock';
import moment from 'moment';

class Day extends Component {
    constructor(props) {
        super(props);
    }

    renderDayTitle() {
        let { history, date } = this.props;
        const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        date = moment(date);
        return (
            <div className="c-day-title">
                <h3 className="title-day"><strong>{date.format('ddd')}</strong></h3>
                <h3 className="title-date">{date.format('MMM D')}</h3>
            </div>
        );
    }

    renderTimeBlocks() {
        let { history, taskDict, tsDict } = this.props;
        let timeBlocks = [];
        let tasks = history.tasks.map(taskId => taskDict[taskId]);
        tasks.forEach(task => {
            let timestamps = task.timestamps.map(tsId => tsDict[tsId]);
            timestamps.forEach(timestamp => {
                timeBlocks.push(
                    <TimeBlock 
                        task={task} 
                        timestamp={timestamp} 
                        key={timestamp._id} 
                        populateTimestampEditor={this.props.populateTimestampEditor} />
                    );
            });
        });
        return timeBlocks;
    }
    
    render() {
        return(
            <div className="c-day">
                {this.renderDayTitle()}
                <div className="c-day-body">
                    {this.renderTimeBlocks()}
                </div>
            </div>
        );
    }
}

export default Day;