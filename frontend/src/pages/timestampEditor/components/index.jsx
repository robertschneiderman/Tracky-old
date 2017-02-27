import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import moment from 'moment';
import * as actions from '../redux/actions';
import { objToArr } from '../../../common/helpers/selectors'

import TaskIncrementer from './TaskIncrementer';
import TimeInput from './TimeInput';

export class TimestampEditor extends Component {

  componentWillMount() {
    let { activeTaskIdx } = this.props;
    if (activeTaskIdx === undefined) hashHistory.push('calendar');
  }

  handleEdit() {
    let { dispatches, tasks, activeTaskIdx, timestamp } = this.props;
    let task = tasks[activeTaskIdx];
    dispatches.updateTimestamp(task.id, timestamp)
  }

  render() {
    let { activeTaskIdx, timestamp, tasks, dispatches } = this.props;
    let { start, end } = timestamp;
            // <p className="text-timestamp-editor">{start}</p>
    return (
      <div className="p-timestamp-editor">
        <div className="c-timestamp-editor">

          {activeTaskIdx !== undefined ? [
          <TaskIncrementer activeTaskIdx={activeTaskIdx} tasks={tasks} dispatches={dispatches} />,
          <TimeInput field={'start'} time={start} dispatches={dispatches} />,
          <TimeInput field={'end'} time={end}  dispatches={dispatches} />] : ''}
          <button onClick={this.handleEdit.bind(this)} className="btn-edit-timestamp">Update Timestamp</button>
        </div>
      </div>
    );
          // <div className="r-timestamp-editor">
          //   <p className="label-timestamp-editor">End</p>
          //   <div className="w-timestamp-editor-ui">
          //     {selectedTask.name ? this.renderDateIncrementer(end) : ''}
          //     <div className="w-timestamp-editor-inputs">
          //       {selectedTask.name ? this.renderTimeInput(end) : ''}
          //     </div>
          //   </div>
          // </div>          
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  let {task, timestampEditor} = state;
  let {taskId, timestamp} = timestampEditor;
  let tasks = objToArr(task);
  let activeTaskIdx;
  tasks.forEach((task, i) => {
      if (task.id === taskId) activeTaskIdx = i;
  })
  // let selectedTask = task[taskId];
  // let selectedTaskIndex = fil

  return {
    activeTaskIdx,
    tasks,
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
