import merge from 'lodash/merge';
import initialState from './initialState';

import {
         EDIT_STORED_TIMESTAMP,
       } from './actions';

const timestampeditorReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case EDIT_STORED_TIMESTAMP:
      newState[action.key] = action.value;
      return newState;
    default:
      return state;
  }
};

export default timestampeditorReducer;