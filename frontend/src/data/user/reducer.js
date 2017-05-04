import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_USERS,
         RECEIVE_USER,
         REMOVE_USER,
         UPDATE_TASK_ARR,         
         USER_ERROR
       } from './actions';

const userReducer = (state = initialState, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_USERS:
      newState = {};
      action.users.forEach(user => {
        newState[user.id] = user;
      });
      return newState;
    case RECEIVE_USER:
      // const newTemplate = {[action.user.id]: action.user};
      return merge({}, state, action.user);
    case UPDATE_TASK_ARR:
      newState.tasks = newState.tasks.concat([action.taskId]);
      // newState[action.userId].tasks.push(action.taskId);
      return newState;      
    case REMOVE_USER:
      delete newState[action.user.id];
      return newState;
    case USER_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default userReducer;  let newState;