import React, {Component} from 'react';
import TimeBlock from './TimeBlock';
import moment from 'moment';
import { objToArr } from '../../../common/helpers/selectors';

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

    renderTimeBlocksContainers() {
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

    timestampFromClick(y) {
        let { date } = this.props;
        let minutes = y / 2;
        let clickTime = moment(date).startOf('day').add(minutes, 'minutes').format("YYYY-MM-DDTHH:mm:ss.SSSSZ");
        // debugger;
        return {start: clickTime, end: clickTime};
    }

    handleClick(e) {
        let {history, dispatches, taskDict} = this.props;
        let timestamp = this.timestampFromClick(e.nativeEvent.offsetY);
        let taskId = objToArr(taskDict)[0].id;
        
        dispatches.populateTimestampEditorAndRedirect('create', {id: taskId}, timestamp);
    }
    
    render() {
                // {this.renderDayTitle()}
        return(
            <div className="c-day">
                <div className="c-day-body" onClick={(e) => this.handleClick(e)}>
                    {this.renderTimeBlocksContainers()}
                </div>
            </div>
        );
    }
}

export default Day;