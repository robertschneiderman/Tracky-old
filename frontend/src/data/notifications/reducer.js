import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_NOTIFICATIONSS,
         RECEIVE_NOTIFICATIONS,
         REMOVE_NOTIFICATIONS,
         NOTIFICATIONS_ERROR
       } from './actions';

const notificationsReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_NOTIFICATIONSS:
      let newState = {};
      action.notificationss.forEach(notifications => {
        newState[notifications.id] = notifications;
      });
      return newState;
    case RECEIVE_NOTIFICATIONS:
      const newTemplate = {[action.notifications.id]: action.notifications};
      return merge({}, state, newTemplate);
    case REMOVE_NOTIFICATIONS:
      newState = merge({}, state);
      delete newState[action.notifications.id];
      return newState;
    case NOTIFICATIONS_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default notificationsReducer;