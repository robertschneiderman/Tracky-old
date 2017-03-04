import React, {Component} from 'react';
import { startCase } from 'lodash';
import { dateToTime, padNumber, msToTime, msToLongerTime, secondsToTimeString } from '../../../common/helpers/timeHelpers';
import ProgressBar from './ProgressBar';

class TaskDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caughtUp: true
        };
        this.newRender = false;
    }

    componentWillReceiveProps(nextProps) {
        // debugger;
        if (this.props.task) {
            this.newRender = (this.props.task.name !== nextProps.task.name);
        }
        // if (this.props.task.goals[0].count !== nextProps.task.goals[0].count) {
        //     this.setState({caughtUp: true});
        // } else {
        //     this.setState({caughtUp: true});
        // }
    }

    getCompletionString(goal) {
        let { task, timer } = this.props;
        if (task.type === 'frequency') {
            return `${goal.count} / ${goal.target}`;
        } else {
            let timeToAdd = timer && timer.running ? (timer.time / 1000) : 0;
            return `${secondsToTimeString(goal.count + timeToAdd)} / ${secondsToTimeString(goal.target)}`;
        }
    }

    renderGoals() {
        let { task, goalDictionary, timer } = this.props;
        timer = timer || {running: false};
        let goals = (task && task.goals) || [];
        return goals.sort((a, b) => a > b).map(goalId => {
            let goal = goalDictionary[goalId];
            return (
                <div className="c-task-display-goal" key={`sdk-${goal.id}`}>
                    <h3 className="title-task-display-goal">{startCase(goal.interval)}</h3>
                    <p className="text-task-display-goal">
                        {this.getCompletionString(goal)}
                    </p>
                    <ProgressBar goal={goal} timer={timer} />
                </div>
            );
        });
    }
    
    render() {
        let { timer, task } = this.props;
        task = task || {name: '', icon: ''};
        let timeVisibility = task.type === 'frequency' ? {visibility: 'hidden'} : {};

        let animation = this.newRender ? 'slideRight' : '';
        return(
            <div className={`c-task-display ${animation}`}>
                <div className="c-task-display-time" style={timeVisibility}>{msToLongerTime(timer && timer.time)}</div>
                <div className="c-task-display-time-main">
                    <div className="c-task-display-text">
                        {(task.icon) ? <img src={`./static/images/task_icons/${task.icon}.svg`} alt="" className="img-task-display-icon"/> : ''}
                        <h3 className="title-task-diplay">{task.name}</h3>
                    </div>
                    <div className="c-task-display-goals">
                        {this.renderGoals()}
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskDisplay;