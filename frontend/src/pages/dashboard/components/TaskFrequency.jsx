import React, {Component} from 'react';
import { dateToTime } from '../../../common/helpers/timeHelpers';


class TaskFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            timer: 0
        };
    }

    // componentWillMount() {
    //     let { task, goalDictionary } = this.props;
    //     let shortestDurationGoal = task.goals.sort((a, b) => a > b).map(goalId => goalDictionary[goalId])[0];
    //     this.displayGoal = shortestDurationGoal;
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.goal.count !==)
    // }

    handleClick() {
        let { dispatches, task, goal } = this.props;
        dispatches.createTimestamp({taskId: task.id});        
        dispatches.updateGoal(goal.id, {count: goal.count + 1});
    }

    handleMouseEnter() {
        let { task, dispatches } = this.props;
        dispatches.selectTask(task.id);
    }

    getLastTimestamp() {
        let { timestamps } = this.props;
        return timestamps[timestamps.length-1];        
    }

    renderTimestampDisplay() {
        let { task } = this.props;   
        let lastTimestamp = this.getLastTimestamp();
        return (lastTimestamp && lastTimestamp.start) ? dateToTime(lastTimestamp.start) : '';
    }        

    render() {
        let { task, goal } = this.props;
        let { name, icon } = task;
        // debugger;        
        return(
            <div className="c-task" onClick={this.handleClick.bind(this)}>
                <img src={`./static/images/task_icons/${icon}.svg`} className="img-task-icon" />
                <div className="c-task-frequency">
                    <div className="c-task-column-1">
                        <h3 className="title-task-name">{name}</h3>
                        <p className="text-timestamp-f-display">
                            {this.renderTimestampDisplay()}
                        </p>
                    </div>
                    <div className="c-task-column-2">
                        <p className="text-task-count">
                            {goal.count}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskFrequency;