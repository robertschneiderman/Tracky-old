import React, {Component} from 'react';
import moment from 'moment';
import {hashHistory} from 'react-router';
import {dateToTime} from '../../../common/helpers/timeHelpers';

const multiplier = 2;

class TimeBlock extends Component {
    constructor(props) {
        super(props);
        this.editTimestamp = this.editTimestamp.bind(this);
    }

    getTotalMinutes(timeStr) {
        let mins = moment(timeStr).hours() * 60;
        mins += moment(timeStr).get('minutes');
        return mins;
    }

    getStartAndEndPos() {
        let {task, timestamp} = this.props;
        let {start, end} = timestamp;
                
        start = this.getTotalMinutes(start) * multiplier;
        end = task.type === 'time' ? this.getTotalMinutes(end) * multiplier : start + (35 * 2);
        return [start, end];
    }

    getStyle(start, end) {
        let { task } = this.props;
        let height = (end - start > 2) ? end - start : 2;
        return {
            backgroundColor: task.color,
            top: `${start}px`,
            height: `${height}px`
        };        
    }

    renderRange(start, end) {
        let { task, timestamp } = this.props;
        debugger;
        return task.type === 'time' ?
        <p className="text-timeblock-time-range">{`${dateToTime(start)} - ${dateToTime(end)}`}</p> :
        <p className="text-timeblock-time-range">{`${dateToTime(start)}`} <strong>({`${timestamp.strike}`})</strong></p>;
    }

    editTimestamp(e) {
        let {task, timestamp, dispatches} = this.props;
        e.stopPropagation();
        dispatches.populateTimestampEditorAndRedirect('edit', task, timestamp);
    }    

    renderTimeBlock() {
        let { task, timestamp } = this.props;
        let { start, end } = timestamp;
        let [startPos, endPos] = this.getStartAndEndPos();
        let style = this.getStyle(startPos, endPos);

        return (
            <div className="shape-time-block" style={style} onClick={e => this.editTimestamp(e)}>
                <div className="c-time-block-content">
                    <div className="w-timeblock-text">
                        <h3 className="title-timeblock">{`${task.name}`}</h3>
                        {this.renderRange(start, end)}
                    </div>
                    <img src={`./static/images/task_icons/${task.icon}.svg`} alt="" className="icn-timeblock"/>
                </div>
            </div>
        );
    }


    render() {
        let {task, timestamp, special} = this.props;
        let {start, end} = timestamp;
        // let result = (moment(start).get('date') !== moment(end).get('date')) ? this.renderTimeBlocks() : this.renderTimeBlock();
        return this.renderTimeBlock();
    }
}

export default TimeBlock;