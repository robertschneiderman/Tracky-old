import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_HISTORYS,
         RECEIVE_HISTORY,
         REMOVE_HISTORY,
         UPDATE_TASK_ARR,
         HISTORY_ERROR
       } from './actions';

const historyReducer = (state = initialState, action) => {
  let newState;
  newState = merge({}, state);  
  switch(action.type){
    case RECEIVE_HISTORYS:
      return action.historys || newState;
    case RECEIVE_HISTORY:
      const newTemplate = {[action.history.id]: action.history};
      return merge({}, state, newTemplate);
    case REMOVE_HISTORY:
      delete newState[action.history.id];
      return newState;
    case UPDATE_TASK_ARR:
      debugger;
      newState[action.historyId].tasks.push(action.taskId);
      return newState;
    case HISTORY_ERROR:
      alert(action.error.response.data.message);
    default:
      return state;
  }
};

export default historyReducer;