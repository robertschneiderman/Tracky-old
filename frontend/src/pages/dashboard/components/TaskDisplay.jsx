import React, {Component} from 'react';
import { startCase } from 'lodash';
import { dateToTime, padNumber, msToTime, msToLongerTime } from '../../../common/helpers/timeHelpers';
import ProgressBar from './ProgressBar';

class TaskDisplay extends Component {
    constructor(props) {
        super(props);
    }

    renderGoals() {
        let { task, goalDictionary } = this.props;
        let goals = (task && task.goals) || [];
        return goals.sort((a, b) => a > b).map(goalId => {
            let goal = goalDictionary[goalId];
            return (
                <div className="c-task-display-goal" key={`sdk-${goal.id}`}>
                    <h3 className="title-task-display-goal">{startCase(goal.interval)}</h3>
                    <p className="text-task-display-goal">
                        {goal.count} / {goal.target}
                    </p>
                    <ProgressBar goal={goal} />
                </div>
            );
        });
    }
    
    render() {
        let { time, task } = this.props;
        task = task || {name: '', icon: ''};
        return(
            <div className="c-task-display">
                <div className="c-task-display-time">{msToLongerTime(time)}</div>
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