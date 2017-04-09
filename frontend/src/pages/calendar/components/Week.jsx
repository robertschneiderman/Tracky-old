import React, {Component} from 'react';
import moment from 'moment';
import Day from './Day';
import TimeGraph from './TimeGraph';


class Week extends Component {
    constructor(props) {
        super(props);
    }

    returnDay(history, i) {
        let { activeWeek, taskDict, tsDict, dispatches } = this.props;
        let startOfWeek = moment().subtract((activeWeek) * 7, 'days').startOf('week').add(1, 'days');
        let date = startOfWeek.add(i, 'days');
        return <Day 
                date={date}
                history={history}
                taskDict={taskDict}
                tsDict={tsDict}
                dispatches={dispatches}
                key={`tsd-${i}`} />;
    }  

    renderIncompleteWeek(historys) {
        let days = [];
        let j = 0;
                // debugger;

        for (let i = 0; i <= 6; i++) {
            let history = historys[j];
            (history && history.day === i) ? j++ : history = {tasks: [], timestamps: []};
            days.push(this.returnDay(history, i));
        }      
        return days;
    }

    renderCompleteWeek(historys) {
        return historys.map((history, i) => this.returnDay(history, i));
    }

    renderWeek() {
        let { week, historyDict } = this.props;
        let historys = week.map(histId => historyDict[histId]);
        // historys = this.splitTimestamps(historys);
        return (week.length < 7) ? this.renderIncompleteWeek(historys) : this.renderCompleteWeek(historys);
    }

    render() {
        return(
            <div className="c-week">
                {this.renderWeek()}
                <TimeGraph />
            </div>
        );
    }
}

export default Week;

