export const REQUEST_HISTORYS = 'REQUEST_HISTORYS';
export const REQUEST_HISTORY = 'REQUEST_HISTORY';
export const CREATE_HISTORY = 'CREATE_HISTORY';
export const UPDATE_HISTORY = 'UPDATE_HISTORY';
export const DESTROY_HISTORY = 'DESTROY_HISTORY';
export const RECEIVE_HISTORYS = 'RECEIVE_HISTORYS';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';
export const REMOVE_HISTORY = 'REMOVE_HISTORY';
export const UPDATE_TASK_ARR = 'UPDATE_TASK_ARR';
export const HISTORY_ERROR = 'HISTORY_ERROR';

export const requestHistorys = () => ({
    type: REQUEST_HISTORYS,
});

export const requestHistory = id => ({
    type: REQUEST_HISTORY,
    id
});

export const receiveHistorys = historys => ({
    type: RECEIVE_HISTORYS,
    historys
});

export const receiveHistory = history => ({
    type: RECEIVE_HISTORY,
    history
});

export const removeHistory = history => ({
    type: REMOVE_HISTORY,
    history
});

export const createHistory = history => ({
    type: CREATE_HISTORY,
    history
});

export const updateHistory = history => ({
    type: UPDATE_HISTORY,
    history
});

export const destroyHistory = history => ({
    type: DESTROY_HISTORY,
    history
});

export const historyError = error => ({
    type: HISTORY_ERROR,
    error
});

export const updateTaskArr = (historyId, taskId) => ({
    type: UPDATE_TASK_ARR,
    historyId,
    taskId
});
