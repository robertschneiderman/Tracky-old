import React from 'react';

class GoalFrequency extends React.Component {

  constructor(props) {
      super(props);
  }

  handleChange(e, key) {
    let { name } = this.props;

    if (e.target.value.length > 1) {
      this.props.changeGoal(name, e.target.value);
      e.target.value = '';
      e.target.blur();
    }    
  }

  handleBlur(e, field) {
    let { name } = this.props;

    if (e.target.value.length > 0) {
      e.target.value = '';
      this.props.changeGoal(name, e.target.value);
    }    
  }

  render() {
    let { name, value, } = this.props;
    return (
      <div className="c-goal-creator">
        <label className="label-goal">{name}</label>
        
        <div className="c-goal-inputs">
          <input
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleBlur(e)}
            onFocus={(e) => this.handleFocus(e)}
            type="text"
            data-name={this.props.name}
            placeholder={value}
            className="input-goal" /> 
            {(!this.props.enabled) ? <img className="icn-lock "src="./static/images/lock.svg" /> : ""}                     
        </div>
      </div>
    );
  }
}

export default GoalFrequency;