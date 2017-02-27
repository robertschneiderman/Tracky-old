import React, {Component} from 'react';
import TimeBlock from './TimeBlock';
import moment from 'moment';

class Day extends Component {
    constructor(props) {
        super(props);
    }

    renderTimeBlocks() {
        let { history, taskDict, tsDict } = this.props;
        let timeBlocks = [];
        let tasks = history.tasks.map(taskId => taskDict[taskId]);
        tasks.forEach(task => {
            let timestamps = task.timestamps.map(tsId => tsDict[tsId]);
            timestamps.forEach((timestamp, i) => {
                timeBlocks.push(
                    <TimeBlock 
                        task={task} 
                        timestamp={timestamp} 
                        key={`${timestamp._id}-i`} 
                        populateTimestampEditor={this.props.populateTimestampEditor} />
                    );
            });
        });
        return timeBlocks;
    }
    
    render() {
                // {this.renderDayTitle()}
        return(
            <div className="c-day">
                <div className="c-day-body">
                    {this.renderTimeBlocks()}
                </div>
            </div>
        );
    }
}

export default Day;