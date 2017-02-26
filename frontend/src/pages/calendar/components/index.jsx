import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../redux/actions';
import Day from './Day';
import TimeGraph from './TimeGraph';

export class Calendar extends Component {

  constructor(props) {
      super(props);
  }

  componentWillMount() {
    // this.props.getWeek()
  }

  returnDay(history, i) {
    let { activeWeek, taskDict, tsDict } = this.props;
    let startOfWeek = moment().subtract((activeWeek+1) * 7, 'days').startOf('week').add(1, 'days');
    let date = startOfWeek.add(i, 'days');
    debugger;
    return <Day 
            history={history}
            date={date}
            activeWeek={activeWeek}
            taskDict={taskDict}
            tsDict={tsDict}
            key={`tsd-${i}`} />
  }  

  renderIncompleteWeek(historys) {
    let days = [];
    let j = 0;
    for (let i = 0; i <= 6; i++) {
      let history = historys[j];
      (history.day === i) ? j++ : history = {tasks: [], timestamps: []}
      days.push(this.returnDay(history, i))
    }      
    return days;
  }

  renderCompleteWeek(historys) {
    return historys.map(history => this.returnDay(history));
  }

  renderWeek() {
    let { week, historyDict } = this.props;
    let historys = week.map(histId => historyDict[histId]);

    return (week.length < 7) ? this.renderIncompleteWeek(historys) : this.renderCompleteWeek(historys);
  }
  
  render() {
    let { week } = this.props;
    return (
      <div className="c-calendar">
        <TimeGraph />
        <div className="c-week">
          {week ? this.renderWeek() : ''}
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
    week: state.calendar.weeks[state.calendar.activeWeek],
    activeWeek: state.calendar.activeWeek,
    historys,
    historyDict: state.history,
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
