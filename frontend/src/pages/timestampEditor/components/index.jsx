import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import * as actions from '../redux/actions';

export class TimestampEditor extends Component {

  componentWillMount() {
    let { selectedTask } = this.props;
    if (!selectedTask.name) hashHistory.push('calendar');
  }

  render() {
    debugger;
    let { selectedTask, timestamp } = this.props;
    let { name, icon, color } = selectedTask;
    let { start, end } = timestamp;
    return (
      <div className="p-timestamp-editor">
        <div className="c-timestamp-editor">

          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">Task</p>
            <div className="w-timestamp-task-value">
              <img className="img-timestamp-editor-task-icon" src={`./static/images/task_icons/${icon}`} />
              <p className="text-timestamp-editor">{name}</p>
            </div>
          </div> 

          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">Start</p>
            <p className="text-timestamp-editor">{start}</p>
          </div> 

          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">End</p>
            <p className="text-timestamp-editor">{end}</p>
          </div>          

        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  let {task, timestampEditor} = state;
  let {taskId, timestamp} = timestampEditor;
  let selectedTask = task[taskId];

  return {
    selectedTask,
    timestamp
  };
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return {
    dispatches: bindActionCreators({ ...actions }, dispatch)
  };
}

TimestampEditor.propTypes = {
  dispatches: PropTypes.object.isRequired,
};

TimestampEditor.defaultProps = {
  selectedTask: {name: '', icon: '', color: ''},
  timestamp: {start: '', end: ''}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimestampEditor);
