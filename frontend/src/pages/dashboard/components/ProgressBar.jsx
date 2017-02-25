import React, {Component} from 'react';
import { hoursPassedSince, minutesPassedInDay, firstDayOfWeek, firstDayOfMonth, daysInMonth } from '../../../common/helpers/timeHelpers';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    getElapsedProgress() {
        let { goal } = this.props;
        let interval = goal.interval;
        if (interval === 'daily') {
            return minutesPassedInDay() / 1440;
        } else if (interval === 'weekly') {
            return hoursPassedSince(firstDayOfWeek()) / 168;
        } else {
            return hoursPassedSince(firstDayOfMonth()) / (daysInMonth() * 24);
        }
    }

    getCompletedProgress() {
        let { goal } = this.props;
        return goal.count / goal.target;
    }

    render() {
        let { goal } = this.props;
        let elapsedProgress = this.getElapsedProgress();
        let completedProgress = this.getCompletedProgress();

        let elaspedStyle = {width: `${elapsedProgress * 100}%`};
        let completedStyle = {width: `${completedProgress * 100}%`};
        (elapsedProgress > completedProgress) ? completedStyle.zIndex = 10 : elapsedProgress.zIndex = 10;
            // debugger;
        return(
            <div className="c-progress-bar">
                <div className="shape-progress-bar-elapsed" style={elaspedStyle}></div>
                <div className="shape-progress-bar-completed" style={completedStyle}></div>
            </div>
        );
    }
}

export default ProgressBar;