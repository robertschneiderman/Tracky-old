import React, {Component} from 'react';
import store from '../../../common/store';
// import Container from './/_container';

class TaskOptions extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        let { dispatches, name } = this.props;
        name = name.toLowerCase();
        dispatches.changeNewTaskField({[name]: e.target.value});
    }
    
    renderOptions() {
        let { name, selected, onChange, options } = this.props;
                        // onChange={onChange.bind(this, {btnGroup: props.type, value: props.name.toLowerCase()})}
        return options.map((option, i) => {
            return (
                <div className="c-task-option" key={`taskOptions-${i}`}>
                    <label className="label-goal-option">
                        <span className="text-task-option-text">{option}</span>
                        <input
                            id="temp"
                            className="input-goal-option" 
                            name={name} 
                            type="radio"
                            checked={(selected === option) ? 'checked' : ''}
                            onChange={(e) => this.handleChange(e)}
                            value={option.toLowerCase()} />
                    </label>
                </div>
            );    
        });
    }
    render() {
        let { name } = this.props;
        return (
            <div className="c-task-option-group">
                <h3 className="hl-task-option">{name}</h3>
                {this.renderOptions()}
            </div>      
        );
    }
}

export default TaskOptions;
