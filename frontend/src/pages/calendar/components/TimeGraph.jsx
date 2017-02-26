import React, {Component} from 'react';
// import * as actions from '../actions';

class TimeGraph extends Component {
    constructor(props) {
        super(props);
    }

    renderLines() {
        let hourCount = 1;
        let meridiem = 'AM';
        let lines = [];
        lines.push(<div className="c-time-graph-line blank" key={`nos`}></div>);

        for (let i = 30; i <= 1410; i+=30) {
            if (i % 60 === 0) {
                lines.push(
                    <div className="c-time-graph-line" key={`nos-${i}`}>
                        <label className="label-time-graph">{hourCount} {meridiem}</label>
                    </div>
                );
                hourCount++;
            } else {
                lines.push(<div className="c-time-graph-line dotted" key={i}></div>);
            }
            
            if (hourCount === 12 && i % 60 === 0) meridiem = meridiem === 'AM' ? 'PM' : 'AM';
            if (hourCount === 13) hourCount = 1;
        }
        return lines;
    }

    render() {
        return(
            <div className="c-time-graph">
                {this.renderLines()}
            </div>
        );
    }
}

export default TimeGraph;