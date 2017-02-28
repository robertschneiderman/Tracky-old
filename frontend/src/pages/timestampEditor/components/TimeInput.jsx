import React, {Component} from 'react';
import moment from 'moment';
import DateIncrementer from './DateIncrementer';

class TimeInput extends Component {
    constructor(props) {
        super(props);
        // this.lastMeridiemValue;
    }

    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.field === 'meridiem') {
    //     if (this.props.value === )
    //   }
    //   if (value === 'AM' || value === 'PM'   
    // }

    getFieldKey(idx) {
      const KEYS = ['hours', 'minutes', 'meridiem'];
      return KEYS[idx];
    }

    tsFromCaseBasis(key, value) {
      let { field, time } = this.props;
      time = moment(time);

      if (key === 'hours') {
        value = (time.hours() > 12) ? value + 12 : value;
        return time[key](value).format("YYYY-MM-DDTHH:mm:ss.SSSSZ");
      }
      if (key === 'meridiem') {
        if (value === 'AM') { /// make sure is a change
          return time.subtract(12, 'hours').format("YYYY-MM-DDTHH:mm:ss.SSSSZ");
        } else {
          return time.add(12, 'hours').format("YYYY-MM-DDTHH:mm:ss.SSSSZ");
        }
      } else {
        return time[key](value).format("YYYY-MM-DDTHH:mm:ss.SSSSZ");
      }
    }

    sendOffTimestamp(input, idx) {
      let { field, dispatches } = this.props;
      let { time } = this.props;
      let key = this.getFieldKey(idx);
      let value = input.value;
              // debugger;

      if (this.isValidChange(key, value)) {

        debugger;
        let timestamp = this.tsFromCaseBasis(key, value);
        // timestamp = moment.utc(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSS");

        dispatches.editStoredTimestamp(field, timestamp);
      }
      input.value = '';
    }

    isValidChange(key, value) {
      return (key === 'hours') ? value >= 1 && value <= 12 :
             (key === 'minutes') ? value >= 0 && value <= 60 :
             value === 'AM' || value === 'PM';
    }

    shiftFocus(input, idx) {
        if (idx === 2) {
          input.blur();
          return;
        }
        let inputContainer = input.parentElement;
        let nextIdx = idx + 2; // adjusts for colon
        let nextChild = inputContainer.children[nextIdx];
        nextChild.focus();      
    }

    handleOnChange(e, idx, length) {
      let input = e.target;
      if (input.value.length === length) {
        this.sendOffTimestamp(input, idx);
        // debugger;
        this.shiftFocus(input, idx);
      }
    }    

    renderTimeInput(time) {
      // MMM DD YYYY 
      let timeStr = moment(time).format("h mm A");
      let fields = timeStr.split(" ");
      let lengths = [2, 2, 2];
      let inputs = [];
      for (let i = 0; i < fields.length; i++) {
        inputs.push(
          <input 
            onChange={e => this.handleOnChange(e, i, lengths[i])}
            className="input-time-editor"
            style={{width: `${Number(lengths[i])}rem`}}
            type="text"
            placeholder={fields[i]} />
        );
        if (i === 0) inputs.push(<span className="chars-input-time-editor">:</span>);
      }
      return inputs;
    }
              // {this.renderDateIncrementer(time)}

    render() {
      let { time, dispatches, field } = this.props;
        return(
          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">{field}</p>
            <div className="w-timestamp-editor-ui">
              <DateIncrementer field={field} time={time} dispatches={dispatches} />
              <div className="w-timestamp-editor-inputs">
                {this.renderTimeInput(time)}
              </div>
            </div>
          </div>
        );
    }
}

export default TimeInput;