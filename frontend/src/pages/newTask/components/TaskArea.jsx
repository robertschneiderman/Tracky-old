import React from 'react';
import {connect} from 'react-redux';
import TaskOption from './TaskOption';
import * as actions from '../redux/actions';
import ColorOption from './ColorOption';
import IconOption from './IconOption';

class TaskArea extends React.Component {

    constructor(props) {
        super(props);
    }

    updateName(evt) {
        let { dispatches } = this.props;
        dispatches.changeNewTaskField('name', evt.target.value);
    }

    render() {
        let { name, color, type, icon, interval, changeNewTaskField, dispatches } = this.props;
        let value = name || '';
        return (
            <div className="c-task-area">
                <h2 className="title-task-area">Task</h2>
                <input
                    value={value}
                    onChange={this.updateName.bind(this)}
                    name="name"
                    className="input-task-name"
                    type="text"
                    placeholder="Name" />

                <ColorOption selectedColor={color} dispatches={dispatches} />
                <IconOption icon={icon} dispatches={dispatches} />
                <TaskOption name="Type" options={['time', 'frequency']} selected={type} dispatches={dispatches} />
                <TaskOption name="Interval" options={['daily', 'weekly', 'monthly']} selected={interval} dispatches={dispatches} />       
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { newTask } = state;
    let { name, selected } = newTask;
    return { name, selected };
};

const mapDispatchToProps = (dispatch) => ({
    updateName: payload => dispatch(actions.updateName(payload)),
    optionChange: payload => dispatch(actions.optionChange(payload)),
    selectColor: color => dispatch(actions.selectColor(color))
});

//   handleOptionChange(evt) {
//     let property = (evt.target.name === 'goal-type') ? 'goalType' : 'goalInterval';
//     let value = evt.target.value;
//     this.props.optionChange();
//     this.setState({[property]: value });
//   }

export default connect(mapStateToProps, mapDispatchToProps)(TaskArea);