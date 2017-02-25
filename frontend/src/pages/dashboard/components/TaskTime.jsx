import React, {Component} from 'react';
import moment from 'moment';

class TaskTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            interval: null,
            timer: 0,
            totalTime: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.timestamps.length !== nextProps.timestamps.length) {
            this.setState({totalTime: this.getTotalTime(nextProps.timestamps)});
        }
    }

    getTotalTime(timestamps) {
        let ts = timestamps[0];
        let totalSeconds = timestamps.reduce((accum, tss) => {
            let seconds = moment.duration(moment(tss.end).unix() - moment(tss.start).unix(), 'seconds').seconds();
            return accum + seconds;
        }, 0);
        debugger;
        return this.secondsToHoursMinutes(totalSeconds);
    }

    handleClick() {
        let { dispatches, task, timestamp } = this.props;
        if (!this.state.running) {
            dispatches.createTimestamp({taskId: task.id});
            let interval = setInterval(() => {
                this.setState({timer: this.state.timer + 1});
            }, 1000);
            this.setState({running: true, interval});
        } else {
            dispatches.updateTimestamp({id: timestamp.id});
            clearInterval(this.state.interval);
            this.setState({running: false, interval: null});
        }
    }

    dateToTime(date) {
        return moment(date).format('h:mm A');
    }

    padNumber(number) {
        return (number < 10) ? `0${number}` : number;
    }

    secondsToHoursMinutes(seconds) {
        let totalMinutes = Math.floor(seconds / 60);
        let hours = Math.floor(totalMinutes / 60);
        let minutes = (totalMinutes - hours * 60);
        // debugger;
        return `${this.padNumber(hours)}:${this.padNumber(minutes)}`;
    }

    renderTimestampDisplay() {
        let { timestamp, task } = this.props;        
        return (
            <p className="text-timestamp-display">
                {(timestamp && timestamp.start) ? `${this.dateToTime(timestamp.start)} - ` : '' }
                {(timestamp && timestamp.end) ? this.dateToTime(timestamp.end) : '' }
            </p>
        );
    }

    render() {
        let { timestamp, task } = this.props;
        let { name, icon } = task;
        // debugger;
        return(
            <div className="c-task" onClick={this.handleClick.bind(this)}>
                <img src={`./static/images/task_icons/${icon}.svg`} className="img-task-icon" />
                <div className="c-task-text">
                    <div className="c-task-row-1">
                        <h3 className="title-task-name">{name}</h3>
                        <p className="text-task-timer">{this.secondsToHoursMinutes(this.state.timer)}</p>
                    </div>
                    <div className="c-task-row-2">
                        {this.renderTimestampDisplay()}
                        <p className="text-total-time"></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskTime;