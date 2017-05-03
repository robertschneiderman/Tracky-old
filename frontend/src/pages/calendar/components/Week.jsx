import React, {Component} from 'react';
import moment from 'moment';
import Day from './Day';
import TimeGraph from './TimeGraph';
import { minutesElapsedInDay, adjustedDay } from '../../../common/helpers/timeHelpers';

class Week extends Component {
    constructor(props) {
        super(props);
    }

    returnDay(history, i) {
    }  

    arrangeTimestampsInWeek() {
        let { timestamps, taskDict } = this.props;

        let week = [[], [], [], [], [], [], []];

        timestamps.forEach(timestamp => {
            let idx = adjustedDay(moment(timestamp.start).get('day'));
            // timestamp.task = taskDict[timestamp.taskId].name;
            week[idx].push(timestamp);
        });

        return week;
    }

    // getStartOfWeek() {
    //     let { activeWeek } = this.props;
    //     let now = moment();
    //     let adjustment = now.get('day') === 0 ? 1 : 0;
    //     return now.subtract(activeWeek + adjustment, 'weeks').startOf('week');
    // }

    renderWeek() {
        let { taskDict, timestamps, dispatches, dates } = this.props;
        // let historys = this.arrangeHistorys();

        let week = this.arrangeTimestampsInWeek();

        return week.map((timestamps, i) => {
            // debugger;
            // let date = this.getStartOfWeek().add(1, 'days').add(i, 'days');
            let date = dates[i];
            return <Day 
                    date={date}
                    timestamps={timestamps}
                    taskDict={taskDict}
                    dispatches={dispatches}
                    key={`tsd-${i}`} />;
            });
        // return (week.length < 7) ? this.renderIncompleteWeek(week) : this.renderCompleteWeek(week);
    }

    renderCurrentTimeLine() {
        let currentDay = moment().get('day');
        let lineLeft = `${adjustedDay(currentDay) * 14.28}%`;    
        let style = {top: `${minutesElapsedInDay()*2}px`, left: lineLeft };
        return <div className="shape-current-time-line" style={style}></div>;
    }    

    render() {
        return(
            <div className="c-week">
                {this.renderWeek()}
                <TimeGraph />
                {this.renderCurrentTimeLine()}                
            </div>
        );
    }
}

export default Week;

