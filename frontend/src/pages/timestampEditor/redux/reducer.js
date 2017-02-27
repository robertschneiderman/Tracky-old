import merge from 'lodash/merge';
import initialState from './initialState';

import {
         EDIT_STORED_TIMESTAMP,
         EDIT_STORED_TASK_ID,
         STORE_TIMESTAMP,
       } from './actions';

const timestampeditorReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case STORE_TIMESTAMP:
      newState.timestamp = action.payload;
      return newState;
    case EDIT_STORED_TIMESTAMP:
      newState.timestamp[action.key] = action.value;
      return newState;
    case EDIT_STORED_TASK_ID:
      newState.taskId = action.payload;    
      return newState;
    default:
      return state;
  }
};

export default timestampeditorReducer;