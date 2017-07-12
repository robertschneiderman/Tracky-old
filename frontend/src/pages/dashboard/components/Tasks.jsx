import React, {Component} from 'react';
import { startCase } from 'lodash';
import TaskFrequency from './TaskFrequency';
import TaskTime from './TaskTime';
import { sortTasks } from '../../../common/helpers/common';


class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    goalSort(a, b) {
        let intervalValues = {'daily': 1, 'weekly': 2, 'monthly': 3};
        return intervalValues[a.interval] > intervalValues[b.interval];
    }    

    renderTasks() {
        let { tasks, dispatches, timestamp, goalDictionary } = this.props;
        let result = [];
        let intervals = [];
        let taskz = sortTasks(tasks);
        debugger;
        // .forEach((task, i) => {
            // let timestamps = task.timestamps.map(id => timestamp[id]);
            // let goals = task.goals.map(goalId => goalDictionary[goalId]).sort(this.goalSort);  
            // let shortestDurationGoal = goals[0];
            // // debugger;
            // if (i === 0 || intervals[0] !== shortestDurationGoal.interval) {
            //     intervals.unshift(shortestDurationGoal.interval);
            //     result.push(<p className="label-task-label">{startCase(shortestDurationGoal.interval)}</p>);
            // } 

            // result.push();
                  
            // if (task.type === 'time') {
            //     result.push(<TaskTime task={task} goal={shortestDurationGoal} dispatches={dispatches} timestamps={timestamps} {...this.props} key={`sd2-${i}`} />);
            // } else {
            //     result.push(<TaskFrequency task={task} goal={shortestDurationGoal} dispatches={dispatches} timestamps={timestamps} {...this.props} key={`sd2-${i}`} />);
            // }
        // });

        return result;
    }
    
    render() {
        return(
            <div className="c-tasks">
                {this.renderTasks()}
            </div>
        );
    }
}

export default Tasks;