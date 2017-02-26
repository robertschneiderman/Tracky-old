import merge from 'lodash/merge';
import initialState from './initialState';

import {
         RECEIVE_WEEKS,
       } from './actions';

const calendarReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_WEEKS:
      newState.weeks.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default calendarReducer;