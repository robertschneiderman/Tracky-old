import React, {Component} from 'react';
import { hoursPassedSince, minutesPassedInDay, firstDayOfWeek, firstDayOfMonth, daysInMonth, today } from '../../../common/helpers/timeHelpers';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    getElapsedProgress() {
        let { user, goal } = this.props;
        let interval = goal.interval;
        // let devDate = user.devDate;
        if (interval === 'daily') {
            return minutesPassedInDay() / 1440;
        } else if (interval === 'weekly') {
            return hoursPassedSince(firstDayOfWeek(today())) / 168;
        } else {
            return hoursPassedSince(firstDayOfMonth(today())) / (daysInMonth(today()) * 24);
        }
    }

    getCompletedProgress() {
        let { goal, timer } = this.props;
        let timeToAdd = timer && timer.running ? (timer.time / 1000) : 0;
        
        return Math.min( (goal.count + timeToAdd) / Math.floor(goal.target * goal.multiplier), 1);
    }

    getBarStyles() {
        let { goal } = this.props;
        let elapsedProgress = this.getElapsedProgress();
        let completedProgress = this.getCompletedProgress();

        let elapsedStyle = {width: `${elapsedProgress * 100}%`};
        let completedStyle = {width: `${completedProgress * 100}%`};
        
        if (elapsedProgress < completedProgress) {
            elapsedStyle = {
                backgroundColor: 'transparent',
                borderRight: '3px dotted #c6ffc6',
                width: '1px',
                left: `${elapsedProgress * 100}%`,
                zIndex: 10
            };
        }
        return [completedStyle, elapsedStyle];
    }

    render() {
        let [completedStyle, elapsedStyle] = this.getBarStyles();
        return(
            <div className="c-progress-bar">
                <div className="shape-progress-bar-elapsed" style={elapsedStyle}></div>
                <div className="shape-progress-bar-completed" style={completedStyle}></div>
            </div>
        );
    }
}

export default ProgressBar;