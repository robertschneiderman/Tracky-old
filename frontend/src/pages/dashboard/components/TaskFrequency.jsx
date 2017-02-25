import React, {Component} from 'react';


class TaskFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            timer: 0
        };
    }

    handleClick() {
        let { dispatches, task } = this.props;
        if (!this.state.running) {
            dispatches.createTimestamp({id: task.id});
            this.setState({running: !this.state.running});
            // this.startTimer();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.running) {
            this.setState({timer: this.state.times + 1});
        }
    }

    // startTimer() {
    //     this.intervsetInterval(() => {
    //     }, 1000)
    // }

    render() {
        let { name, icon } = this.props.task;
        // debugger;        
        return(
            <div className="c-task" onClick={this.handleClick}>
                <img src={`./static/images/task_icons/${icon}.svg`} className="img-task-icon" />
                <div className="c-task-text">
                    <div className="c-task-row-1">
                        <h3 className="title-task-name">{name}</h3>
                        <p className="text-task-timer"></p>
                    </div>
                    <div className="c-task-row-2">
                        <p className="text-timestamp-display"></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskFrequency;