import React, {Component} from 'react';
import moment from 'moment';
import {hashHistory} from 'react-router';
import {dateToTime, mowment} from '../../../common/helpers/timeHelpers';
import { COLOR_MAP } from '../../../common/helpers/maps';

const multiplier = 2;

class TimeBlock extends Component {
    constructor(props) {
        super(props);
        this.editTimestamp = this.editTimestamp.bind(this);
    }

    getTotalMinutes(timeStr) {
        let mins = mowment(timeStr).hours() * 60;
        mins += mowment(timeStr).get('minutes');
        return mins;
    }

    getStartAndEndPos() {
        let {task, timestamp} = this.props;
        let {start, end} = timestamp;
                
        start = this.getTotalMinutes(start) * multiplier;
        end = task.type === 'time' ? this.getTotalMinutes(end) * multiplier : start + (5 * 2);
        return [start, end];
    }

    getStyle(start, end) {
        let { task } = this.props;
        let height = (end - start > 2) ? end - start : 2;
        return {
            backgroundColor: COLOR_MAP[task.color],
            top: `${start}px`,
            height: `${height}px`
        };        
    }
    
    getTextSyle(height) {
        height = parseInt(height);
        let fontSize = Math.min(height / 47, 1);
        let marginBottom = (fontSize * 0.15);
        // debugger;
        if (fontSize < 0.63) fontSize = 0;
        // if fo
        return {fontSize: `${fontSize}rem`, marginBottom: `${marginBottom}rem`};
    }

    getIconStyle(height) {
        height = parseInt(height);        
        let ratio = Math.min(height / 47, 1);
        let widthAndHeight = `${ratio * 1.4}rem`;
        let top = `${ratio * 0}rem`;
        let right = `${ratio * -.5}rem`;
        if (ratio < 0.63) widthAndHeight = 0;

        return {width: widthAndHeight, height: widthAndHeight, top, right};
    }

    renderRange(start, end, textStyle) {
        let { task, timestamp } = this.props;
        let style = {fontSize: `${parseFloat(textStyle.fontSize) * .8}rem`};

        return task.type === 'time' ?
        <p className="text-timeblock-time-range" style={style}>{`${dateToTime(start)} - ${dateToTime(end)}`}</p> :
        <p className="text-timeblock-time-range" style={style}>{`${dateToTime(start)}`}   <strong style={{marginRight: '.5rem'}}>{`${timestamp.strike}`}</strong></p>;
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

        let textStyle = this.getTextSyle(style.height);
        let iconStyle = this.getIconStyle(style.height);

        return (
            <div className="shape-time-block" style={style} onClick={e => this.editTimestamp(e)}>
                <div className="c-time-block-content">
                    <div className="w-timeblock-text" style={textStyle}>
                        <h3 className="title-timeblock" style={textStyle}>{`${task.name}`}</h3>
                        {this.renderRange(start, end, textStyle)}
                    </div>
                    <img style={iconStyle} src={`./static/images/task_icons/${task.icon}.svg`} alt="" className="icn-timeblock"/>
                </div>
            </div>
        );
    }


    render() {
        let {task, timestamp, special} = this.props;
        let {start, end} = timestamp;
        
        return this.renderTimeBlock();
    }
}

export default TimeBlock;