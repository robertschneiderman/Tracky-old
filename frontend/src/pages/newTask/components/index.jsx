import React, { Component, PropTypes } from 'react';
import {hashHistory} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import TaskArea from './TaskArea';
import GoalArea from './GoalArea';
import { createTask } from '../../../data/task/actions';

export class NewTask extends Component {

  taskAreaComplete() {
    let { name, color, type, interval } = this.props;
    // return name && color && type && interval;
    return true;
  }

  handleCreate() {
    let { name, color, type, icon, time, frequency, interval, history } = this.props;
    let goals = type === 'time' ? time : frequency;
    let lastKey = Object.keys(history)[0];
    let lastHistory = history[lastKey]

    if (interval === 'weekly' || interval === 'monthly') delete goals.daily;
    if (interval === 'monthly') delete goals.weekly;

    this.props.createTaskAndGoals({name, color, icon, type, historyId: lastHistory.id}, goals)
    hashHistory.push('dashboard');
  }

  render() {
    return (
      <div className="c-new-task">
        <h1 className="hl-new-task">Create New Task</h1>
        <div className="c-task-and-goal-area">
          <TaskArea {...this.props} />
          {(this.taskAreaComplete()) ? <GoalArea {...this.props} /> : ''}
        </div>  
          {(this.taskAreaComplete()) ? <button onClick={this.handleCreate.bind(this)} className="btn-create-task">Add Task</button> : ''}
      </div>
    );
  }
}

NewTask.propTypes = {
  dispatches: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {...state.newTask, history: state.history};
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    dispatches: bindActionCreators({ ...actions }, dispatch),
    createTaskAndGoals: (task, goals) => dispatch(actions.createTaskAndGoals(task, goals))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
