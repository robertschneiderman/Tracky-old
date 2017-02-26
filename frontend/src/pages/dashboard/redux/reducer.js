import merge from 'lodash/merge';
import initialState from './initialState';

import {
         UPDATE_TIMER,
         SELECT_TASK,
         START_TIMER,
         STOP_TIMER,
       } from './actions';

const dashboardReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case SELECT_TASK:
      newState.activeTask = action.payload;      
      return newState;
    case START_TIMER:
      newState.timers[action.payload.id] ? 
      newState.timers[action.payload.id].running = true
      : newState.timers[action.payload.id] = {running: true, time: 0};
      // debugger;
      return newState;
    case UPDATE_TIMER:
      newState.timers[action.payload.id].time = action.payload.time;
      debugger;
      return newState;
    case STOP_TIMER:
      newState.timers[action.payload.id].running = false;
      return newState;
    default:
      return state;
  }
};

export default dashboardReducer;