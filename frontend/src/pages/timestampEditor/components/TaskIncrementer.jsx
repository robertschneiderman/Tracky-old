import React, {Component} from 'react';
class TaskIncrementer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { callback } = this.props;
        return(
            <div className="w-task-incrementer">
                <div className="w-incrementer-btns">
                    <img onClick={callback.bind(this, 1)} src="./static/images/task_icons/up_arrow.svg" className="btn-incrementer-btn" />
                    <img onClick={callback.bind(this, -1)} src="./static/images/task_icons/down_arrow.svg" className="btn-incrementer-btn" />
                </div>            
            </div>
        );
    }
}

export default TaskIncrementer;