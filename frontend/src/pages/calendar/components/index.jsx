import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../redux/actions';
import Day from './Day';
import TimeGraph from './TimeGraph';
import { minutesElapsedInDay } from '../../../common/helpers/timeHelpers';

export class Calendar extends Component {

  constructor(props) {
      super(props);
  }

  componentDidUpdate() {
    window.scrollTo(0, minutesElapsedInDay() * 2);
  }  


  renderDayTitles() {
    let { activeWeek } = this.props;
    let startOfWeek = moment().startOf('week').add(1, 'days');
    let titles = [];
    for (let i = 0; i <= 6; i++) {
      let date = i === 0 ? startOfWeek : startOfWeek.add(1, 'days');
      // debugger;
      titles.push(
          <div className="c-day-title" key={`nvw-${i}`}>
              <h3 className="title-day"><strong>{date.format('ddd')}</strong></h3>
              <h3 className="title-date">{date.format('MMM D')}</h3>
          </div>
      );
    }
    return titles;
  }

  // isSplitDayTimestamp(ts) {
  //   return moment(ts.start).get('date') !== moment(ts.end).get('date');
  // }

  splitTimestamps(historys) {
    // go through all timstamps and find ones that crossover
    // create another timestamp in the next history

    // historys.forEach((history, histIdx) => {
    //   history.tasks.forEach((task, taskIdx) => {
    //     task.forEach(ts => {
    //       if (this.isSplitDayTimestamp(ts)) {
    //         history[histIdx+1][taskIdx]
    //       }
    //     })
    //   })
    // })
  }

  returnDay(history, i) {
    let { activeWeek, taskDict, tsDict, dispatches } = this.props;
    let startOfWeek = moment().subtract((activeWeek+1) * 7, 'days').startOf('week').add(1, 'days');
    let date = startOfWeek.add(i, 'days');
    // debugger;
    return <Day 
            history={history}
            taskDict={taskDict}
            tsDict={tsDict}
            dispatches={dispatches}
            key={`tsd-${i}`} />
  }  

  renderIncompleteWeek(historys) {
    let days = [];
    let j = 0;
    for (let i = 0; i <= 6; i++) {
      let history = historys[j];
      (history && history.day === i) ? j++ : history = {tasks: [], timestamps: []}
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
    // historys = this.splitTimestamps(historys);

    return (week.length < 7) ? this.renderIncompleteWeek(historys) : this.renderCompleteWeek(historys);
  }
  
  render() {
    let { week } = this.props;
    return (
      <div className="c-calendar">

        <div className="c-day-titles">
          {this.renderDayTitles()}
        </div>

        <div className="c-week">
          {week ? this.renderWeek() : ''}
          <TimeGraph />
        </div>
        {this.props.children}
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
