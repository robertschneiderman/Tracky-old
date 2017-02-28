import React, {Component} from 'react';
import TimeBlock from './TimeBlock';
import moment from 'moment';

class Day extends Component {
    constructor(props) {
        super(props);
    }

    getTimestampStrikes(timestamps) {
        let counts = {};
        timestamps.forEach(ts => {
            counts[ts.taskId] = counts[ts.taskId] ? counts[ts.taskId] + 1 : 1;
            ts.strike = counts[ts.taskId];
        });
        return timestamps;
    }

    renderTimeBlocks() {
        let { history, taskDict, tsDict, dispatches } = this.props;
        let timeBlocks = [];
        let tasks = history.tasks.map(taskId => taskDict[taskId]);
        tasks.forEach(task => {
            let timestamps = task.timestamps.map(tsId => tsDict[tsId]);
            timestamps = this.getTimestampStrikes(timestamps);
            timestamps.forEach((timestamp, i) => {
                timeBlocks.push(
                    <TimeBlock 
                        task={task} 
                        timestamp={timestamp} 
                        dispatches={dispatches}
                        key={`${timestamp.id}-i`} />
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