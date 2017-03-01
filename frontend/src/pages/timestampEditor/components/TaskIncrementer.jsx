import React, {Component} from 'react';
import IncrementBtns from './IncrementBtns';

class TaskIncrementer extends Component {
    constructor(props) {
        super(props);
    }

    rotateTask(num) {
        let { activeTaskIdx, tasks, dispatches } = this.props;

        activeTaskIdx = activeTaskIdx + num;
        if (activeTaskIdx < 0) activeTaskIdx = (tasks.length - 1);
        if (activeTaskIdx === tasks.length) activeTaskIdx = 0;

        let task = tasks[activeTaskIdx];
        dispatches.editStoredState('taskId', task.id);
    }

    render() {
        let { tasks, activeTaskIdx } = this.props;
        let selectedTask = tasks[activeTaskIdx];
        let { name, icon, color } = selectedTask;
        return(
          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">Task</p>
            <div className="w-timestamp-task-value">
              <img className="img-timestamp-editor-task-icon" src={`./static/images/task_icons/${icon}.svg`} />
              <p className="text-timestamp-editor">{name} {`(${selectedTask.type})`}</p>
            </div>
            <IncrementBtns callback={this.rotateTask.bind(this)} />            
          </div>     
        );
            // <div className="w-task-incrementer">
            // </div>
    }
}

export default TaskIncrementer;