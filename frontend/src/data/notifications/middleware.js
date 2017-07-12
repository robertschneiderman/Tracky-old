// Notifications API Util
import { fetchNotificationss,
         fetchNotifications,
         createNotifications,
         updateNotifications,
         destroyNotifications
       } from './api_util';
// Notifications Action
import { requestNotificationss,
         requestNotifications,
         receiveNotifications,
         receiveNotificationss,
         removeNotifications,
         notificationsError,
// Notifications Constants
         REQUEST_NOTIFICATIONSS,
         REQUEST_NOTIFICATIONS,
         CREATE_NOTIFICATIONS,
         UPDATE_NOTIFICATIONS,
         DESTROY_NOTIFICATIONS,
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  const notificationssSuccess = res => dispatch(receiveNotificationss(res.data));
  const notificationsSuccess = res => dispatch(receiveNotifications(res.data));
  const notificationsRemoved = res => dispatch(removeNotifications(res.data));
  const notificationsErrored = res => dispatch(notificationsError(res.data.responseJSON));
  switch(action.type){
    case REQUEST_NOTIFICATIONSS:
      fetchNotificationss(notificationsSuccess);
      return next(action);
    case REQUEST_NOTIFICATIONS:
      fetchNotifications(action.id, notificationsSuccess);
      return next(action);
    case CREATE_NOTIFICATIONS:
      createNotifications(action.id, notificationsSuccess, notificationsErrored);
      return next(action);
    case UPDATE_NOTIFICATIONS:
      updateNotifications(action.notifications, notificationsSuccess);
      return next(action);
    case DESTROY_NOTIFICATIONS:
      destroyNotifications(action.notifications, notificationsRemoved);
      return next(action);
    default:
      return next(action);
  }
};