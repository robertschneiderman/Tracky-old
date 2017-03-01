import merge from 'lodash/merge';
import initialState from './initialState';

import {
         POPULATE_STATE,
         EDIT_STORED_TIMESTAMP,
         EDIT_STORED_STATE,
       } from './actions';

const timestampeditorReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case POPULATE_STATE:
      newState = action.payload;
      return newState;
    case EDIT_STORED_STATE:
      newState.taskId = action.value;    
      return newState;
    case EDIT_STORED_TIMESTAMP:
      newState.timestamp[action.key] = action.value;
      return newState;
    default:
      return state;
  }
};

export default timestampeditorReducer;