export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_USER = 'REQUEST_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DESTROY_USER = 'DESTROY_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USERS';
export const USER_ERROR = 'USER_ERROR';
export const UPDATE_TASK_ARR = 'UPDATE_TASK_ARR';

export const requestUsers = () => ({
    type: REQUEST_USERS,
});

export const requestUser = id => ({
    type: REQUEST_USER,
    id
});

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const removeUser = user => ({
    type: REMOVE_USER,
    user
});

export const createUser = user => ({
    type: CREATE_USER,
    user
});

export const updateUser = user => ({
    type: UPDATE_USER,
    user
});

export const destroyUser = user => ({
    type: DESTROY_USER,
    user
});

export const userError = error => ({
    type: USER_ERROR,
    error
});

export const updateTaskArr = (userId, taskId) => ({
    type: UPDATE_TASK_ARR,
    userId,
    taskId
});
