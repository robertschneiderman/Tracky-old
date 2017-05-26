import React, {Component} from 'react';
import moment from 'moment';
import { dateToTime, padNumber, msToTime, msToLongerTime, today, mowment } from '../../../common/helpers/timeHelpers';

class TaskTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            interval: null,
            timer: 0,
            totalTime: 0
        };
        this.interval;
    }

    componentDidMount() {
        let totalTime = this.getTotalTime(this.props.timestamps);
        this.setState({totalTime});
    }

    getTotalTime(timestamps) {
        let ts = timestamps[0];
        let totalMilliSeconds = timestamps.reduce((accum, tss) => {
        let milliSeconds = moment.duration(mowment(tss.end).unix() - mowment(tss.start).unix(), 'seconds').seconds() * 1000;
            return accum + milliSeconds;
        }, 0);
        
        return totalMilliSeconds;
    }

    getLastTimestamp() {
        let { timestamps } = this.props;
        return timestamps[timestamps.length-1];        
    }

    timerStart() {
        let { dispatches, task, user } = this.props;
        this.setState({running: true});
        this.interval = setInterval(() => {
            this.setState({timer: this.state.timer + 10});
            dispatches.startTimer({id: task.id});
            dispatches.updateTimer({id: task.id, time: this.state.timer + 10});
        }, 10);

        let start = today();

        dispatches.createTimestamp({start, taskId: task.id});        
    }

    timerEnd() {
        let { dispatches, task, user } = this.props;
        let lastTimestamp = this.getLastTimestamp();

        let end = today();   

        dispatches.stopTimer({id: task.id});
        dispatches.finishTimestamp({id: lastTimestamp.id, end});
        // dispatches.incrementGoals(task.id, Math.floor(this.state.timer/ 1000));
        clearInterval(this.interval);
        let totalTime = this.state.totalTime + this.state.timer;
        this.setState({running: false, interval: null, timer: 0, totalTime});

    }

    handleClick() {
        (!this.state.running) ? this.timerStart() : this.timerEnd();
    }

    handleMouseEnter() {
        let { task, dispatches } = this.props;
        dispatches.selectTask(task.id);
    }

    renderTimestampDisplay() {
        let { task } = this.props;   
        let lastTimestamp = this.getLastTimestamp();
        return (
            <p className="text-timestamp-display">
                {(lastTimestamp && lastTimestamp.start) ? `${dateToTime(lastTimestamp.start)} - ` : '' }
                {(lastTimestamp && lastTimestamp.end) ? dateToTime(lastTimestamp.end) : '' }
            </p>
        );
    }

    render() {
        let { timestamp, task } = this.props;
        let { name, icon } = task;
        let { totalTime, timer, running } = this.state;
        
        return(
            <div className="c-task" onClick={this.handleClick.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)}>
                <img src={`./static/images/task_icons/${icon}.svg`} className="img-task-icon" />
                <div className="c-task-text">
                    <div className="w-task-column-1">
                        <h3 className="title-task-name">{name}</h3>
                        {this.renderTimestampDisplay()}
                    </div>
                    <div className="w-task-column-2">
                        <p className="text-task-timer">{msToTime(timer)}</p>
                        <p className="text-total-time">{msToTime(totalTime)}</p>
                    </div>
                </div>
                {(running) ? <div className="shape-loader loader"></div> : ''}
                <div className="shape-checkmark-circle">
                    <img src="" alt="" className="img-checkmark-circle"/>
                </div>
            </div>
        );
    }
}

export default TaskTime;