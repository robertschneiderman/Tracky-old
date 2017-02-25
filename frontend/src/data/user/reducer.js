import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_USERS,
         RECEIVE_USER,
         REMOVE_USER,
         USER_ERROR
       } from './actions';

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_USERS:
      let newState = {};
      action.users.forEach(user => {
        newState[user.id] = user;
      });
      return newState;
    case RECEIVE_USER:
      // const newTemplate = {[action.user.id]: action.user};
      return merge({}, state, action.user);
    case REMOVE_USER:
      newState = merge({}, state);
      delete newState[action.user.id];
      return newState;
    case USER_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default userReducer;