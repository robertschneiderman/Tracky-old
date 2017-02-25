import merge from 'lodash/merge';
import initialState from './initialState';

import {
         UPDATE_TIMER,
         SELECT_TASK,
       } from './actions';

const dashboardReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case UPDATE_TIMER:
      newState.timers[action.payload.id] = action.payload.time;
      return newState;
    case SELECT_TASK:
      newState.activeTask = action.payload;      
      return newState;
    default:
      return state;
  }
};

export default dashboardReducer;