import React, {Component} from 'react';
class TypeIncrementer extends Component {
    constructor(props) {
        super(props);
    }

    rotateType(num) {
        let { dispatches } = this.props;

        idx = idx + num;
        if (activeTaskIdx < 0) activeTaskIdx = (tasks.length - 1);
        if (activeTaskIdx === tasks.length) activeTaskIdx = 0;

        let task = tasks[activeTaskIdx];
        dispatches.editStoredTaskId(task.id);
    }

    render() {
        return(
          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">Type</p>
            <div className="w-timestamp-task-value">
              <p className="text-timestamp-editor">Time</p>
            </div>
            <IncrementBtns callback={this.rotateType.bind(this)} />            
          </div>
        );
    }
}

export default TypeIncrementer;