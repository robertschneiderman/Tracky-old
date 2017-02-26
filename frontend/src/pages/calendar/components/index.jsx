import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Day from './Day';

export class Calendar extends Component {

  constructor(props) {
      super(props);
  }

  componentWillMount() {
    // this.props.getWeek()
  }

  renderDays() {
    let { historys, taskDict, tsDict } = this.props;
    let days = [];
    for (let i = 1; i <= 7; i++) {
      let history = historys[historys.length-i] || {tasks: [], timestamps: []};
      days.push(<Day history={history} taskDict={taskDict} tsDict={tsDict} key={`tsd-${i}`}/>)
    }
    return days;
  }
  
  render() {
    let { historys } = this.props;
    return (
      <div className="c-calendar">
        <div className="c-week">
          {historys.length > 0 ? this.renderDays() : ''}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  let historyIds = state.user.historys;
  let historys;
  if (historyIds) {
    historys = historyIds.slice(0, 7).map(historyId => state.history[historyId]);
  }
  historys = historys || [];
  // state.calendar.activeWeek;
    // history:
  return {
    historys,
    taskDict: state.task,
    tsDict: state.timestamp
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    dispatches: bindActionCreators({ ...actions }, dispatch)
  };
}

Calendar.propTypes = {
  dispatches: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
