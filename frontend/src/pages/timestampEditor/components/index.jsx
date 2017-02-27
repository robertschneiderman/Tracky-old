import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import moment from 'moment';
import * as actions from '../redux/actions';

import TimeInput from './TimeInput';

export class TimestampEditor extends Component {

  componentWillMount() {
    let { selectedTask } = this.props;
    if (!selectedTask.name) hashHistory.push('calendar');
  }

  renderDateIncrementer(time) {
    let timeStr = moment(time).format("MMM DD YYYY");
    return (
      <div className="w-date-incrementer">
        <span className="text-date-incrementer">{timeStr}</span>
        <div className="w-data-incrementer-btns">
          <button className="btn-data-incrementer-btns">^</button>
          <button className="btn-data-incrementer-btns">@</button>
        </div>
      </div>
    )
  }

  render() {
    let { selectedTask, timestamp, dispatches } = this.props;
    let { name, icon, color } = selectedTask;
    let { start, end } = timestamp;
            // <p className="text-timestamp-editor">{start}</p>
    return (
      <div className="p-timestamp-editor">
        <div className="c-timestamp-editor">

          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">Task</p>
            <div className="w-timestamp-task-value">
              <img className="img-timestamp-editor-task-icon" src={`./static/images/task_icons/${icon}.svg`} />
              <p className="text-timestamp-editor">{name}</p>
            </div>
          </div> 

          {selectedTask.name ? [
          <TimeInput field={'start'} time={start} dispatches={dispatches} />,
          <TimeInput field={'end'} time={end}  dispatches={dispatches} />] : ''}

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
