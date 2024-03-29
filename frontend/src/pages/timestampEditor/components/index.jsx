import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import moment from 'moment';
import { mowment } from '../../../common/helpers/timeHelpers';
import { upperFirst } from 'lodash';
import * as actions from '../redux/actions';
import { objToArr } from '../../../common/helpers/selectors'

import TypeIncrementer from './TypeIncrementer';
import TaskIncrementer from './TaskIncrementer';
import TimeInput from './TimeInput';

export class TimestampEditor extends Component {

  componentWillMount() {
    let { mode } = this.props;
    if (mode === undefined) hashHistory.push('calendar');
  }

  getElapsedTime(timestamp) {
    // debugger;
    return mowment(timestamp.end).unix() - mowment(timestamp.start).unix();
  }

  isValidRange() {
    let { timestamp } = this.props;
    return this.getElapsedTime(timestamp) >= 0 || !timestamp.end;
  }

  handleCreate() {
    let { dispatches, task, timestamp } = this.props;
    let elapsedSeconds = this.getElapsedTime(timestamp);
    timestamp.taskId = task.id;
    // debugger;    
    if (this.isValidRange()) {    
      dispatches.createTimestamp(timestamp);
      // (task.type === 'time') ? dispatches.incrementGoals(task.id, elapsedSeconds) : dispatches.incrementGoals(task.id, 1);
      hashHistory.push('calendar');      
    }
}

  handleEdit() {
    let { dispatches, task, oldTaskId, timestamp, originalTimestamp } = this.props;
    let elapsedSeconds = this.getElapsedTime(timestamp);
    let originalElapsedSeconds = this.getElapsedTime(originalTimestamp);

    if (elapsedSeconds >= 0) {
      if (oldTaskId !== task.id) {
        // debugger;
        dispatches.removeFromTimestampArr(oldTaskId, timestamp.id);
        // (task.type === 'time') ? dispatches.incrementGoals(oldTaskId, -originalElapsedSeconds) : dispatches.incrementGoals(oldTaskId, -1);
        // (task.type === 'time') ? dispatches.incrementGoals(task.id, elapsedSeconds) : dispatches.incrementGoals(task.id, 1);
      } else {
        // (task.type === 'time') ? dispatches.incrementGoals(task.id, elapsedSeconds - originalElapsedSeconds) : dispatches.incrementGoals(task.id, 1);
      }

      dispatches.updateTimestamp(task.id, timestamp);

      hashHistory.push('calendar');
    }
  }

  handleRemove() {
    let { dispatches, task, oldTaskId, timestamp, originalTimestamp } = this.props;
    let originalElapsedSeconds = this.getElapsedTime(originalTimestamp);
    
    dispatches.removeFromTimestampArr(oldTaskId, timestamp.id);
    dispatches.destroyTimestamp({id: timestamp.id});
    // (task.type === 'time') ? dispatches.incrementGoals(oldTaskId, -originalElapsedSeconds) : dispatches.incrementGoals(oldTaskId, -1);
    hashHistory.push('calendar');
  }

  handleClick() {
    hashHistory.push('calendar');
  }

  renderBtn() {
    let { mode } = this.props;
    mode = upperFirst(`${mode}`);
    let fnc = `handle${mode}`;
    return <button disabled={!this.isValidRange()} onClick={this[fnc].bind(this)} className="btn-edit-timestamp">{mode} Timestamp</button>;
  }

  render() {
    let { mode, activeTaskIdx, timestamp, task, tasks, dispatches } = this.props;
    let { start, end } = timestamp;


    end = end || start;
            // <p className="text-timestamp-editor">{start}</p>
    if (!task) return null;
    return (
      <div className="p-timestamp-editor">
        <img onClick={this.handleClick.bind(this)} src="./static/images/x.svg" alt="" className="btn-timestamp-editor-close"/>
        
        <div className="c-timestamp-editor">
          {mode !== undefined ? [
          <TaskIncrementer activeTaskIdx={activeTaskIdx} tasks={tasks} dispatches={dispatches} key="osm-2" />,
          <TimeInput field={'start'} time={start} dispatches={dispatches} key="osm-3" />] : ''}
          {(task && task.type === 'time') ? <TimeInput field={'end'} time={end}  dispatches={dispatches} key="osm-4" /> : ''}
          {this.renderBtn()}
          <a onClick={(e) => this.handleRemove(e)} className="link-remove-timestamp">Remove Timestamp</a>
        </div>

      </div>
    );        
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  let {task, timestampEditor} = state;
  let {mode, taskId, oldTaskId, timestamp, originalTimestamp} = timestampEditor;
  let tasks = objToArr(task);
  let activeTaskIdx;
  tasks.forEach((task, i) => {
      if (task.id === taskId) activeTaskIdx = i;
  })
  // let selectedTask = task[taskId];
  // let selectedTaskIndex = fil

  let activeTask = tasks[activeTaskIdx] || tasks[0];

  return {
    activeTaskIdx,
    oldTaskId,
    task: activeTask,
    tasks,
    originalTimestamp,
    timestamp,
    mode
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
