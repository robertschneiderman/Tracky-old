import React, {Component} from 'react';
import { dateToTime, padNumber, msToTime, msToLongerTime } from '../../../common/helpers/timeHelpers';

class TaskDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        debugger;
        return(
            <div className="c-task-display">
                {msToLongerTime(this.props.time)}
            </div>
        );
    }
}

export default TaskDisplay;