import React, {Component} from 'react';
import TaskFrequency from './TaskFrequency';
import TaskTime from './TaskTime';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    renderTasks() {
        let { tasks, dispatches, timestamp, goalDictionary } = this.props;
        return tasks.map((task, i) => {
            let timestamps = task.timestamps.map(id => timestamp[id]);
            let goals = task.goals.sort((a, b) => a > b).map(goalId => goalDictionary[goalId]);  
            let shortestDurationGoal = goals[0];
                  
            if (task.type === 'time') {
                return <TaskTime task={task} goal={shortestDurationGoal} dispatches={dispatches} timestamps={timestamps} {...this.props} key={`sd2-${i}`} />; 
            } else {
                return <TaskFrequency task={task} goal={shortestDurationGoal} dispatches={dispatches} timestamps={timestamps} {...this.props} key={`sd2-${i}`} />;
            }
        });
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