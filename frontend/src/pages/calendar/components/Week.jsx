import React, {Component} from 'react';
import moment from 'moment';
import Day from './Day';
import TimeGraph from './TimeGraph';


class Week extends Component {
    constructor(props) {
        super(props);
    }

    returnDay(history, i) {
    }  

    arrangeHistorys() {
        let { week } = this.props;
        let arrangedHistorys = [{tasks: [], timestamps:[]}, {tasks: [], timestamps:[]}, {tasks: [], timestamps:[]}, {tasks: [], timestamps:[]}, {tasks: [], timestamps:[]}, {tasks: [], timestamps:[]}, {tasks: [], timestamps:[]}];
        week.forEach(history => {
            arrangedHistorys[history.day] = history;
        });
        return arrangedHistorys;
    }

    renderWeek() {
        let { week, historyDict, activeWeek, taskDict, tsDict, dispatches } = this.props;
        let historys = this.arrangeHistorys();

        return historys.map((history, i) => {
            let date = moment().subtract(activeWeek, 'weeks').startOf('week').add(1, 'days').add(i, 'days');
            return <Day 
                    date={date}
                    history={history}
                    taskDict={taskDict}
                    tsDict={tsDict}
                    dispatches={dispatches}
                    key={`tsd-${i}`} />;
            });
        // return (week.length < 7) ? this.renderIncompleteWeek(week) : this.renderCompleteWeek(week);
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

