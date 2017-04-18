import React from 'react';
import { hoursAndMinsToNumber, dateToTime, padNumber, minutesToTime, msToLongerTime } from '../../../common/helpers/timeHelpers';

class GoalTime extends React.Component {

  constructor(props) {
      super(props);
  }

  getHoursAndMinutes(e) {
    let childNodes = e.target.parentElement.childNodes;
    let hours = childNodes[0].value || childNodes[0].placeholder;
    let minutes = childNodes[2].value || childNodes[2].placeholder;
    return [hours, minutes]; 
  }

  validNumberOfTime(time) {
    return Math.min(hoursAndMinsToNumber(time), 1440);
  }

  handleChange(e, key) {
    let { name } = this.props;
    let [hours, minutes] = this.getHoursAndMinutes(e);

    if (e.target.value.length > 1) {
      this.props.changeGoal(name, hoursAndMinsToNumber(`${hours}:${minutes}`));
      e.target.value = '';
      (key === 'hours') ? e.target.parentElement.childNodes[2].focus() : e.target.blur();
    }    
  }

  handleBlur(e, field) {
    let { name } = this.props;
    let [hours, minutes] = this.getHoursAndMinutes(e);

    if (e.target.value.length > 0) {
      e.target.value = '';
      this.props.changeGoal(name, this.validNumberOfTime(`${hours}:${minutes}`));
    }    
  }  

  handleFocus(e) {
    if (!this.props.enabled) e.target.blur();
  }

  render () {
    let formattedValue =  minutesToTime(this.props.value);
    let [hours, minutes] = formattedValue.split(":");
    
    return (
      <div className="c-goal-creator">
        <label className="label-goal">{this.props.name}</label>
        
        <div className="c-goal-inputs">
          <input
            onChange={(e) => this.handleChange(e, 'hours')}
            onBlur={(e) => this.handleBlur(e, 'hours')}
            onFocus={(e) => this.handleFocus(e)}
            type="text"
            data-name={this.props.name}
            placeholder={hours}
            className="input-goal" />
          <span className="text-goal-input">:</span>
          <input
            onChange={(e) => this.handleChange(e, 'minutes')}
            onBlur={(e) => this.handleBlur(e, 'minutes')}
            onFocus={(e) => this.handleFocus(e)}            
            type="text"
            data-name={this.props.name}
            placeholder={minutes}
            className="input-goal" />
            {(!this.props.enabled) ? <img className="icn-lock "src="./static/images/lock.svg" /> : ""}      
        </div>
      </div>
    );
  }
}

export default GoalTime;