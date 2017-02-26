import React, {Component} from 'react';
import { startCase } from 'lodash';
import { dateToTime, padNumber, msToTime, msToLongerTime, secondsToTimeString } from '../../../common/helpers/timeHelpers';
import ProgressBar from './ProgressBar';

class TaskDisplay extends Component {
    constructor(props) {
        super(props);
    }

    getCompletionString(goal) {
        let { task, timer } = this.props;
        let timeToAdd = timer.running ? (timer.time / 1000) : 0;
        // debugger;
        return (task.type === 'frequency') ? 
               `${goal.count} / ${goal.target}` :
               `${secondsToTimeString(goal.count + timeToAdd)} / ${secondsToTimeString(goal.target)}`;
    }

    renderGoals() {
        let { task, goalDictionary, timer } = this.props;
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
        return(
            <div className="c-task-display">
                <div className="c-task-display-time" style={timeVisibility}>{msToLongerTime(timer && timer.time)}</div>
                <div className="c-task-display-time-main">
                    {(task.icon) ? <img src={`./static/images/task_icons/${task.icon}.svg`} alt="" className="img-task-display-icon"/> : ''}
                    <div className="c-task-display-text">
                        <h3 className="title-task-diplay">{task.name}</h3>
                        <div className="c-task-display-goals">
                            {this.renderGoals()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskDisplay;