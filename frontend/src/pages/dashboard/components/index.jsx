import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { requestUser } from '../../../data/user/actions';
import { createTimestamp } from '../../../data/timestamp/actions';
import Tasks from './Tasks';

export class Dashboard extends Component {

  componentWillUpdate(nextProps, nextState) {
    let { users, tasks } = nextProps;
    let user = Object.values(users)[0] || {name: ''};
    this.message =(Object.keys(tasks).length === 0) ? `Welcome ${user.name}! This is your dashboard... Create tasks by clicking on the "+" in the navbar` : '';
  }

  render() {
    let { tasks, history } = this.props;
    return (
      <div className="c-dashboard">
        <div className="text-message">{this.message || ''}</div>

        {(tasks.length > 0) ? <Tasks {...this.props} /> : ''}
        
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  let { user, history, task, timestamp, dashboard } = state
  let currentHistory = history[Object.keys(history)[0]];
  let tasks = []
  if (currentHistory) {
    tasks = currentHistory.tasks.map(taskId => task[taskId]);
    tasks.for
  }

  return {
    users: user,
    history: currentHistory,
    tasks,
    timestamps: timestamp,
    message: dashboard.message
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
