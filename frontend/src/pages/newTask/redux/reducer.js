import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_NEWTASKS,
         RECEIVE_NEWTASK,
         REMOVE_NEWTASK,
         NEWTASK_ERROR,
         CHANGE_NEW_TASK_FIELD,
         INCREMENT_GOAL,
         CREATE_TASK_AND_GOALS,
       } from './actions';

const newtaskReducer = (state = initialState, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case CHANGE_NEW_TASK_FIELD:
      let key = Object.keys(action.payload)[0];
      let value = Object.values(action.payload)[0];
      newState[key] = value;
      return newState;
    case INCREMENT_GOAL:
      newState[action.key] = action.payload;
      return newState;
    case CREATE_TASK_AND_GOALS:
      return newState;
    default:
      return state;
  }
};

export default newtaskReducer;