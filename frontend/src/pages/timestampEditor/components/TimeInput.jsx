import React, {Component} from 'react';
import moment from 'moment';

class TimeInput extends Component {
    constructor(props) {
        super(props);
    }

    getFieldKey(idx) {
      const KEYS = ['hours', 'colon', 'minutes', 'meridiem'];
      return KEYS[idx];
    }

    tsFromCaseBasis(value) {
      let { field, time } = this.props;
      if (field === 'hours') {
        if (time.hours() > 12) {
          return moment(time)[key](value + 12);
        }
      }
      if (field === 'meridiem') {
        if (value === 'AM') { /// make sure is a change
          return time.subtract(12, 'hours');
        } else {
          return time.add(12, 'hours');
        }
      } else {
        moment(time)[key](value + 12);
      }
    }

    sendOffTimestamp(idx, input) {
      let { field, dispatches } = this.props;
      let { time } = this.props;
      let key = this.getFieldKey(idx);
      if (this.isValidChange(key, input.value)) {
        let timestamp = this.tsFromCaseBasis(key, input.value);
        dispatches.editStoredTimestamp(field, timestamp);
        input.value = '';
      }
    }

    isValidChange(key, value) {
      return (key === 'hours') ? value >= 1 && value <= 12 :
             (key === 'minutes') ? value >= 0 && value <= 60 :
             value === 'AM' || value === 'PM';
    }

    shiftFocus(input, idx) {
        // debugger;
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

    render() {
      let { time, field } = this.props;
              // {this.renderDateIncrementer(time)}  underUI
        return(
          <div className="r-timestamp-editor">
            <p className="label-timestamp-editor">{field}</p>
            <div className="w-timestamp-editor-ui">
              <div className="w-timestamp-editor-inputs">
                {this.renderTimeInput(time)}
              </div>
            </div>
          </div>
        );
    }
}

export default TimeInput;