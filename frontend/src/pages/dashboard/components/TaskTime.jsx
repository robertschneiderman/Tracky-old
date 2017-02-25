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

    componentDidMount() {
        let totalTime = this.getTotalTime(this.props.timestamps);
        this.setState({totalTime});
    }

    componentWillReceiveProps(nextProps) {
        // if (this.props.timestamps.length !== nextProps.timestamps.length) {
        //     let totalTime = this.getTotalTime(nextProps.timestamps);
        //     debugger;
        //     this.setState({totalTime});
        // }
    }

    getTotalTime(timestamps) {
        let ts = timestamps[0];
        let totalMilliSeconds = timestamps.reduce((accum, tss) => {
        let milliSeconds = moment.duration(moment(tss.end).unix() - moment(tss.start).unix(), 'seconds').seconds() * 1000;
            return accum + milliSeconds;
        }, 0);
        // debugger;
        return totalMilliSeconds;
    }

    getLastTimestamp() {
        let { timestamps } = this.props;
        return timestamps[timestamps.length-1];        
    }

    handleClick() {
        let { dispatches, task } = this.props;
        let lastTimestamp = this.getLastTimestamp();

        if (!this.state.running) {
            dispatches.createTimestamp({taskId: task.id});
            let interval = setInterval(() => {
                this.setState({timer: this.state.timer + 10});
            }, 10);
            this.setState({running: true, interval});
        } else {
            dispatches.updateTimestamp({id: lastTimestamp.id});
            clearInterval(this.state.interval);
            debugger;
            let totalTime = this.state.totalTime + this.state.timer;
            this.setState({running: false, interval: null, timer: 0, totalTime});
        }
    }

    dateToTime(date) {
        return moment(date).format('h:mm A');
    }

    padNumber(number) {
        return (number < 10) ? `0${number}` : number;
    }

    msToTime(totalMilliSeconds) {
        let duration = moment.duration(totalMilliSeconds);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let seconds = duration.seconds();
        // debugger;
        return `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }

    msToLongerTime(totalMilliSeconds) {
        let duration = moment.duration(totalMilliSeconds);
        let decaSeconds = Math.floor(duration.milliseconds() / 10);        
        return this.msToTime(totalMilliSeconds) + `:${this.padNumber(decaSeconds)}:${this.padNumber(decaSeconds)}`;
    }

    renderTimestampDisplay() {
        let { task } = this.props;   
        let lastTimestamp = this.getLastTimestamp();
        return (
            <p className="text-timestamp-display">
                {(lastTimestamp && lastTimestamp.start) ? `${this.dateToTime(lastTimestamp.start)} - ` : '' }
                {(lastTimestamp && lastTimestamp.end) ? this.dateToTime(lastTimestamp.end) : '' }
            </p>
        );
    }

    render() {
        let { timestamp, task } = this.props;
        let { name, icon } = task;
        let { totalTime, timer } = this.state;
        // debugger;
        return(
            <div className="c-task" onClick={this.handleClick.bind(this)}>
                <img src={`./static/images/task_icons/${icon}.svg`} className="img-task-icon" />
                <div className="c-task-text">
                    <div className="c-task-row-1">
                        <h3 className="title-task-name">{name}</h3>
                        <p className="text-task-timer">{this.msToTime(timer)}</p>
                    </div>
                    <div className="c-task-row-2">
                        {this.renderTimestampDisplay()}
                        <p className="text-total-time">{this.msToTime(totalTime)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskTime;