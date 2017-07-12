import { axioss, ROOT_URL } from '../../common/config';

export const fetchNotificationss = (success) => {
  axioss.get(`notificationss`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const fetchNotifications = (id, success) => {
  axioss.get(`notificationss/${id}`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const createNotifications = (notifications, success, error) => {
  axioss.post(`notificationss`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const updateNotifications = (notifications, success) => {
  axioss.patch(`notificationss/${notifications.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const destroyNotifications = (notifications, success) => {
  axioss.delete(`notificationss/${notifications.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};