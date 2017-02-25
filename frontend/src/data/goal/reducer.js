import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_GOALS,
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