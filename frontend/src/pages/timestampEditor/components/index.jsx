import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import moment from 'moment';
import * as actions from '../redux/actions';

export class TimestampEditor extends Component {

  componentWillMount() {
    let { selectedTask } = this.props;
    if (!selectedTask.name) hashHistory.push('calendar');
  }

  handleOnChange(e, idx, length) {
    let input = e.target;
    let inputContainer = input.parentElement;

    if (input.value === length) {
      let nextChild = inputContainer.children(idx+1);
      nextChild.focus();
    }
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

  renderTimeInput(time) {
    // MMM DD YYYY 
    let timeStr = moment(time).format("h mm A");
    let fields = timeStr.split(" ");
    let lengths = [2, 2, 2];
    let inputs = [];
    for (let i = 0; i < fields.length; i++) {
      inputs.push(
        <input 
          onChange={e => this.handleOnChange(e)}
          className="input-time-editor"
          style={{width: `${1 * lengths[i]}rem`}}
          type="text"
          placeholder={fields[i]} />
      )
      if (i === 0) inputs.push(<span className="chars-input-time-editor">:</span>)
    }
    return inputs;
  }

  render() {
    let { selectedTask, timestamp } = this.props;
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

          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">Start</p>
            <div className="w-timestamp-editor-ui">
              {selectedTask.name ? this.renderDateIncrementer(start) : ''}
              <div className="w-timestamp-editor-inputs">
                {selectedTask.name ? this.renderTimeInput(start) : ''}
              </div>
            </div>
          </div> 

          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">End</p>
            <div className="w-timestamp-editor-ui">
              {selectedTask.name ? this.renderDateIncrementer(end) : ''}
              <div className="w-timestamp-editor-inputs">
                {selectedTask.name ? this.renderTimeInput(end) : ''}
              </div>
            </div>
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
