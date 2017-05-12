import React, {Component} from 'react';
import moment from 'moment';
import IncrementBtns from './IncrementBtns';
import { mowment } from '../../../common/helpers/timeHelpers';


class DateIncrementer extends Component {
    constructor(props) {
        super(props);
    }

    incrementTime(number) {
        let { time, field, dispatches } = this.props;
        let method = number > 0 ? 'add' : 'subtract';
        let date = mowment(time)[method](1, 'days').format("YYYY-MM-DDTHH:mm:ss.SSSS");
        dispatches.editStoredTimestamp(field, date);        
    }

    formattedTime() {
        let { time } = this.props;
        return mowment(time).format("MMM DD, YYYY");
    }

    render() {
        return(
            <div className="w-date-incrementer">
                <p className="text-date-incrementer">{this.formattedTime()}</p>
                <IncrementBtns callback={this.incrementTime.bind(this)} />
            </div>
        );     
    }
}

export default DateIncrementer;