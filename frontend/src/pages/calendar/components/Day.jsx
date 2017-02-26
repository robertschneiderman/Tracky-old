import React, {Component} from 'react';
import TimeBlock from './TimeBlock';

class Day extends Component {
    constructor(props) {
        super(props);
    }

    renderTimeBlocks() {
        let timeBlocks = [];
        let { history, taskDict, tsDict } = this.props;
        let tasks = history.tasks.map(taskId => taskDict[taskId]);
        tasks.forEach(task => {
            let timestamps = task.timestamps.map(tsId => tsDict[tsId]);
            timestamps.forEach(timestamp => {
                timeBlocks.push(
                    <TimeBlock 
                        task={task} 
                        timestamp={timestamp} 
                        key={timestamp._id} 
                        populateTimestampEditor={this.props.populateTimestampEditor} />
                    );
            });
        });
        return timeBlocks;
    }
    
    render() {
        return(
            <div className="c-day">
                {this.renderTimeBlocks()}
            </div>
        );
    }
}

export default Day;