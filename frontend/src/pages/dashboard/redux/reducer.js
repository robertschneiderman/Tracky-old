import merge from 'lodash/merge';
import initialState from './initialState';

import {
         UPDATE_TIMER,
       } from './actions';

const dashboardReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case UPDATE_TIMER:
      newState.time = action.payload;
      return newState;
    default:
      return state;
  }
};

export default dashboardReducer;