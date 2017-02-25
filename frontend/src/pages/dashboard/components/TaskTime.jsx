import React, {Component} from 'react';
import moment from 'moment';

class TaskTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            timer: 0
        };
    }

    handleClick() {
        let { dispatches, task, timestamp } = this.props;
        if (!this.state.running) {
            dispatches.createTimestamp({taskId: task.id});
            this.setState({running: !this.state.running});
            // this.startTimer();
        } else {
            dispatches.updateTimestamp({id: timestamp.id});
            this.setState({running: !this.state.running});
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.running) {
            setTimeout(() => {
                this.setState({timer: this.state.timer + 1});
            }, 1000);
        }
    }

    dateToTime(date) {
        return moment(date).format('h:mm A');
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

    // startTimer() {
    //     this.intervsetInterval(() => {
    //     }, 1000)
    // }

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
                        <p className="text-task-timer">{this.state.timer}</p>
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