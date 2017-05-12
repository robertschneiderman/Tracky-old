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
        let target = Math.ceil(goal.multiplier * goal.target)
        debugger;
        if (task.type === 'frequency') {
            return `${goal.count} / ${target}`;
        } else {
            let timeToAdd = timer && timer.running ? (timer.time / 1000) : 0;
            return `${secondsToTimeString(goal.count + timeToAdd)} / ${secondsToTimeString(goal.target)}`;
        }
    }

    goalSort(a, b) {
        let intervalValues = {'daily': 1, 'weekly': 2, 'monthly': 3};
        return intervalValues[a.interval] > intervalValues[b.interval];
    }

    getGoals() {
        let { task, goalDictionary } = this.props;
        
        let goals = (task && task.goals) || [];
        return goals.map(goalId => goalDictionary[goalId]).sort(this.goalSort);
    }

    renderGoals() {
        let { timer, user } = this.props;
        timer = timer || {running: false};    
        let goals= this.getGoals();

        return goals.map(goal => {
            return (
                <div className="c-task-display-goal" key={`sdk-${goal.id}`}>
                    <div className="w-task-display-goal">
                        <h3 className="title-task-display-goal">{startCase(goal.interval)}</h3>
                        <p className="text-task-display-goal">
                            {this.getCompletionString(goal)}
                        </p>
                    </div>
                    <ProgressBar goal={goal} timer={timer} user={user} />
                </div>
            );
        });
    }
    
    render() {
        let { timer, task } = this.props;
        let firstGoal = this.getGoals()[0] || [];
        
        task = task || {name: '', icon: ''};
        let timeVisibility = (task.type === 'time' && timer && timer.running) ? {} : {visibility: 'hidden'};

        let animation = this.newRender ? 'slideRight' : '';
        let className= `c-task-display` + ' ' + animation;
        return(
            <div className={className}>
                <div className="c-task-display-time" style={timeVisibility}>{msToLongerTime(timer && timer.time)}</div>
                <div className="c-task-display-time-main">
                    <div className="c-task-display-text">
                        {(task.icon) ? <img src={`./static/images/task_icons/${task.icon}.svg`} alt="" className="img-task-display-icon"/> : ''}
                        <h3 className="title-task-diplay">{task.name}</h3>
                    </div>

                    <div className="c-task-display-goals">
                        {this.renderGoals()}
                    </div>

                    {(task && task.goals) ?
                    <div className="w-task-display-streaks-records">
                        <div className="w-record">
                            <img src="./static/images/medal.svg" alt="" className="icn-record"/>
                            <span className="text-streak">0</span>
                        </div>
                        <div className="w-record">
                            <img src="./static/images/fire.svg" alt="" className="icn-streak"/>
                            <span className="text-streak">{firstGoal.streak}</span>
                        </div>                        
                    </div>
                    : '' }
                </div>
            </div>
        );
    }
}

export default TaskDisplay;