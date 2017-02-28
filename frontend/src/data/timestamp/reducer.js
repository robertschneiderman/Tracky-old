import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_TIMESTAMPS,
         RECEIVE_TIMESTAMP,
         REMOVE_TIMESTAMP,
         TIMESTAMP_ERROR
       } from './actions';

const timestampReducer = (state = initialState, action) => {
  let newState = merge({}, state);  
  switch(action.type){
    case RECEIVE_TIMESTAMPS:
      return action.timestamps || newState;
    case RECEIVE_TIMESTAMP:
    debugger;
      newState[action.timestamp.id] = action.timestamp;
      return newState;
    case REMOVE_TIMESTAMP:
      delete newState[action.timestamp.id];
      return newState;
    case TIMESTAMP_ERROR:
    // debugger;
      alert(action.error);
    default:
      return state;
  }
};

export default timestampReducer;