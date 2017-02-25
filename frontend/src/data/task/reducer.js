import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_TASKS,
         RECEIVE_TASK,
         REMOVE_TASK,
         UPDATE_TIMESTAMP_ARR,      
         UPDATE_GOAL_ARR,      
         TASK_ERROR
       } from './actions';

const taskReducer = (state = initialState, action) => {
  let newState;
  newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TASKS:
      return action.tasks || newState;
    case RECEIVE_TASK:
      const newTemplate = {[action.task.id]: action.task};
      return merge({}, state, newTemplate);
    case REMOVE_TASK:
      delete newState[action.task.id];
      return newState;
    case UPDATE_GOAL_ARR:
      newState[action.taskId].goals.push(action.goalId);
      return newState;            
    case UPDATE_TIMESTAMP_ARR:
      newState[action.taskId].timestamps.push(action.timestampId);
      return newState;    
    case TASK_ERROR:
      alert(action.error.response.data.message);
    default:
      return state;
  }
};

export default taskReducer;


// WEBPACK FOOTER //
// ./src/data/task/reducer.js