import React from 'react';
import {connect} from 'react-redux';
import GoalTime from './GoalTime';
import GoalFrequency from './GoalFrequency';
import * as actions from '../redux/actions';

class GoalArea extends React.Component {

    constructor(props) {
        super(props);
        this.changeGoal = this.changeGoal.bind(this);
    }

    addedChar(newVal, oldVal) {
        for (let i = 0; i < newVal.length; i++) {
        let char = newVal[i];
        if (!oldVal[i] || char !== oldVal[i]) return char;
        }
    }   

    syncIntervals(intervalChanged, value) {
        let daily, weekly, monthly;
        let type = this.props.state.type;
        let interval = this.props.state.interval;

        if (intervalChanged === 'daily') {
            daily = value;
            weekly = Math.floor(daily * 7 * .8);
            monthly = Math.floor(weekly * 4.42);
        } else if (intervalChanged === 'weekly') {
            weekly = value;
            monthly = Math.floor(weekly * 4.42);
            daily = Math.floor(weekly * 1.25 / 7);           
        } else {
            monthly = value;
            weekly = Math.floor(monthly * .226);
            daily = Math.floor(weekly * 7 * .8);
        }
            
        this.props.dispatches.changeNewTaskField(type, {daily, weekly, monthly});
    }

    changeGoal(name, increment) {
        this.syncIntervals(name, increment);
    }

    renderGoals(state) {
        let type = state.type;
        let interval = state.interval;
        let values = state[state.type];
        values = (values) ? values : state.time;

        let intervals = (interval === 'daily') ? ['daily', 'weekly', 'monthly'] : (state.interval === 'weekly') ? ['weekly', 'monthly'] : ['monthly'];
        return intervals.map((curInterval, i) => {
            if (type === 'time') {
                return <GoalTime changeGoal={this.changeGoal} name={curInterval} enabled={(i === 0)} value={values[curInterval]} key={`i22${i}`} />;
            } else {
                return <GoalFrequency changeGoal={this.changeGoal} name={curInterval} enabled={(i === 0)} value={values[curInterval]} key={`j2k${i}`} />;
            } 
        });
    }  

    render() {
        return (
            <div className="c-goal-area">
                <h2 className="title-goal-area">Goals</h2>        
                <div className="c-goals">
                    {this.renderGoals(this.props.state)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.newTask
});

const mapDispatchToProps = dispatch => ({
    updateGoals: payload => dispatch(actions.updateGoals(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalArea);


// WEBPACK FOOTER //
// ./src/pages/newTask/components/GoalArea.jsx