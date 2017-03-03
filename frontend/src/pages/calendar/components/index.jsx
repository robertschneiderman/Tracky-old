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
            artificialWeek(1).startOf('week').add(1, 'days').subtract(activeWeek, 'weeks');
  }


  getWeek() {
    let { activeWeek } = this.props;
    let dates = [];
    for (let i = 0; i <= 6; i++) {
      let startOfWeek = this.getStartOfWeek();
      let date = i === 0 ? startOfWeek : startOfWeek.add(i, 'days');
      dates.push(date)
    }
    return dates;
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
  
  render() {
    let { week, historyDict, dispatches } = this.props;
    let dates = this.getWeek();

      return (week.length > 0) ?
          <div className="c-calendar">

            <WeekToggler dates={dates} dispatches={dispatches} />
            <DayTitles dates={dates} />
            <Week {...this.props}/>

            {this.props.children}
          </div> 

          : <div></div>;
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  let historyIds = state.user.historys;
  let historys;
  // if (historyIds) {
  //   historys = historyIds.slice(0, 7).map(historyId => state.history[historyId]);
  // }
  // historys = historys || [];

  return {
    week: state.calendar.weeks[state.calendar.activeWeek] || [],
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
