export const REQUEST_NOTIFICATIONSS = 'REQUEST_NOTIFICATIONSS';
export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
export const CREATE_NOTIFICATIONS = 'CREATE_NOTIFICATIONS';
export const UPDATE_NOTIFICATIONS = 'UPDATE_NOTIFICATIONS';
export const DESTROY_NOTIFICATIONS = 'DESTROY_NOTIFICATIONS';
export const RECEIVE_NOTIFICATIONSS = 'RECEIVE_NOTIFICATIONSS';
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';
export const REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATIONSS';
export const NOTIFICATIONS_ERROR = 'NOTIFICATIONS_ERROR';

export const requestNotificationss = () => ({
    type: REQUEST_NOTIFICATIONSS,
});

export const requestNotifications = id => ({
    type: REQUEST_NOTIFICATIONS,
    id
});

export const receiveNotificationss = notificationss => ({
    type: RECEIVE_NOTIFICATIONSS,
    notificationss
});

export const receiveNotifications = notifications => ({
    type: RECEIVE_NOTIFICATIONS,
    notifications
});

export const removeNotifications = notifications => ({
    type: REMOVE_NOTIFICATIONS,
    notifications
});

export const createNotifications = notifications => ({
    type: CREATE_NOTIFICATIONS,
    notifications
});

export const updateNotifications = notifications => ({
    type: UPDATE_NOTIFICATIONS,
    notifications
});

export const destroyNotifications = notifications => ({
    type: DESTROY_NOTIFICATIONS,
    notifications
});

export const notificationsError = error => ({
    type: NOTIFICATIONS_ERROR,
    error
});
