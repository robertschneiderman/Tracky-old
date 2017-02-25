import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_GOALS,
         RECEIVE_GOAL,
         MERGE_GOALS,
         REMOVE_GOAL,
         GOAL_ERROR
       } from './actions';

const goalReducer = (state = initialState, action) => {
  let newState;
  newState = merge({}, state);  
  switch(action.type){
    case RECEIVE_GOALS:
      return action.goals || newState;
    case RECEIVE_GOAL:
        newState[action.goal.id] = action.goal;
        return newState;
    case MERGE_GOALS:
      action.goals.forEach(goal => {
        newState[goal.id] = goal;
      });
      return newState;
    case REMOVE_GOAL:
      delete newState[action.goal.id];
      return newState;
    case GOAL_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default goalReducer;