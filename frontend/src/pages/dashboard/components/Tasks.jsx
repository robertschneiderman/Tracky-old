import React, {Component} from 'react';
import TaskFrequency from './TaskFrequency';
import TaskTime from './TaskTime';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    renderTasks() {
        let { tasks, dispatches, timestamps } = this.props;
        return tasks.map((task, i) => {
            let lastTimestamp = task.timestamps[task.timestamps.length-1];
            if (task.type === 'time') {
                return <TaskTime task={task} dispatches={dispatches} timestamp={timestamps[lastTimestamp]} {...this.props} key={`sd2-${i}`} />; 
            } else {
                return <TaskFrequency task={task} dispatches={dispatches} timestamp={timestamps[lastTimestamp]} {...this.props} key={`sd2-${i}`} />;
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