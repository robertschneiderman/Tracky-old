import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { requestUser } from '../../../data/user/actions';
import { createTimestamp } from '../../../data/timestamp/actions';
import Tasks from './Tasks';
import TaskDisplay from './TaskDisplay';

export class Dashboard extends Component {

  componentWillUpdate(nextProps, nextState) {
    let { users, tasks } = nextProps;
    let user = Object.values(users)[0] || {name: ''};
    this.message =(Object.keys(tasks).length === 0) ? `Welcome ${user.name}! This is your dashboard... Create tasks by clicking on the "+" in the navbar` : '';
  }

  render() {
    let { tasks, taskDictionary, goalDictionary, history, timers, activeTask } = this.props;
    return (
      <div className="c-dashboard">
        <div className="text-message">{this.message || ''}</div>
          <div className="c-dashboard-main">
            {(tasks.length > 0) ? 
              [<Tasks {...this.props} />,
              <TaskDisplay timer={timers[activeTask]} task={taskDictionary[activeTask]} goalDictionary={goalDictionary} />
              ] : ''}
            
          </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  let { user, history, task, goal, timestamp, dashboard } = state
  let currentHistory = history[Object.keys(history)[0]];
  let tasks = []
  if (currentHistory) {
    tasks = currentHistory.tasks.map(taskId => task[taskId]);
  }

  return {
    users: user,
    history: currentHistory,
    tasks,
    taskDictionary: task,
    timestamp,
    goalDictionary: goal,
    timers: dashboard.timers,
    message: dashboard.message,
    activeTask: dashboard.activeTask
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    dispatches: bindActionCreators({ ...actions }, dispatch)
  };
}

Dashboard.propTypes = {
  dispatches: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
