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

  isValidRange() {
    let { timestamp } = this.props;
    return moment(timestamp.start).unix() < moment(timestamp.end).unix()
  }

  handleEdit() {
    let { dispatches, tasks, oldTaskId, activeTaskIdx, timestamp } = this.props;
    let task = tasks[activeTaskIdx];
    if (this.isValidRange()) {
      dispatches.removeFromTimestampArr(oldTaskId, timestamp.id)
      dispatches.updateTimestamp(task.id, timestamp)
      hashHistory.push('calendar');
    }
  }

  handleClick() {
    hashHistory.push('calendar');
  }

  render() {
    let { activeTaskIdx, timestamp, tasks, dispatches } = this.props;
    let { start, end } = timestamp;
            // <p className="text-timestamp-editor">{start}</p>
    return (
      <div className="p-timestamp-editor">
        <img onClick={this.handleClick.bind(this)} src="./static/images/x.svg" alt="" className="btn-timestamp-editor-close"/>
        
        <div className="c-timestamp-editor">
          {activeTaskIdx !== undefined ? [
          <TaskIncrementer activeTaskIdx={activeTaskIdx} tasks={tasks} dispatches={dispatches} />,
          <TimeInput field={'start'} time={start} dispatches={dispatches} />,
          <TimeInput field={'end'} time={end}  dispatches={dispatches} />] : ''}
          <button disabled={!this.isValidRange()} onClick={this.handleEdit.bind(this)} className="btn-edit-timestamp">Update Timestamp</button>
        </div>

      </div>
    );        
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  let {task, timestampEditor} = state;
  let {taskId, oldTaskId, timestamp} = timestampEditor;
  let tasks = objToArr(task);
  let activeTaskIdx;
  tasks.forEach((task, i) => {
      if (task.id === taskId) activeTaskIdx = i;
  })
  // let selectedTask = task[taskId];
  // let selectedTaskIndex = fil

  return {
    activeTaskIdx,
    oldTaskId,
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
