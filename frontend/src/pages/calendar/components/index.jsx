import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import * as actions from '../redux/actions';
import WeekToggler from './WeekToggler';
import DayTitles from './DayTitles';
import Week from './Week';
// import TimeGraph from './TimeGraph';
import { minutesElapsedInDay, artificialWeek } from '../../../common/helpers/timeHelpers';

export class Calendar extends Component {

  constructor(props) {
      super(props);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.historys.length !== nextProps.historys.length) {
      // let maxWeek = historys.reduce((accum, history) => Math.max(accum, history.week), 0);
      // axioss.post(`users/week/${maxWeek}`);
    // }
  }

  componentDidMount() {
    // debugger
    setTimeout(() => {
      window.scrollTo(0, minutesElapsedInDay() * 2);
    }, 100);
  }

  getStartOfWeek() {
    let { activeWeek } = this.props;
    let mode;
    // return moment().startOf('week').add(1, 'days').subtract(activeWeek, 'weeks');

    return (mode === 'production') ?
            moment().startOf('week').add(1, 'days').subtract(activeWeek, 'weeks'):
            artificialWeek(0).startOf('week').add(1, 'days').subtract(activeWeek, 'weeks');
  }


  getWeek() {
    // let { week } = this.props;
    // let dates = [];
    // for (let i = 0; i <= 6; i++) {
    //   let startOfWeek = this.getStartOfWeek();
    //   let date = i === 0 ? startOfWeek : startOfWeek.add(i, 'days');
    //   dates.push(date)
    // }
    // return dates;
    // return week;
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

  getDates() {
      let { week, activeWeek } = this.props;
      let dates = [];
      if (week[0]) {
          for (let i = 0; i <= 6; i++) {
              let startOfWeek = moment(week[0].date).subtract(activeWeek, 'weeks');  
              // let startOfWeek = moment(week[0].date);
              let date = i === 0 ? startOfWeek : startOfWeek.add(i, 'days');
              dates.push(date)
          }
      }
      return dates;
  }    
  
  render() {
    let { week, historyDict, dispatches } = this.props;
    let dates = this.getDates();
    // debugger;

      return (week) ?
          <div className="c-calendar">

            <WeekToggler dates={dates} {...this.props} dispatches={dispatches} />
            <DayTitles dates={dates} {...this.props} />
            <Week {...this.props}/>

            {this.props.children}
          </div> 

          : <div></div>;
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  let historyDict = state.history;
  let historys;
  // if (historyDict) {
  //   historys = historyDict.slice(0, 7).map(historyId => state.history[historyId]);
  // }
  // historys = historys || [];

  let week = state.calendar.weeks[state.calendar.activeWeek] || [];
  week = week.map(histId => historyDict[histId]);

  return {
    week: week || [],
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
