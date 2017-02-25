import React, {Component} from 'react';
import TaskFrequency from './TaskFrequency';
import TaskTime from './TaskTime';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    renderTasks() {
        let { tasks, dispatches, timestamp } = this.props;
        return tasks.map((task, i) => {
            let timestamps = task.timestamps.map(id => timestamp[id]);
            if (task.type === 'time') {
                return <TaskTime task={task} dispatches={dispatches} timestamps={timestamps} {...this.props} key={`sd2-${i}`} />; 
            } else {
                return <TaskFrequency task={task} dispatches={dispatches} timestamps={timestamps} {...this.props} key={`sd2-${i}`} />;
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