export const REQUEST_TASKS = 'REQUEST_TASKS';
export const REQUEST_TASK = 'REQUEST_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DESTROY_TASK = 'DESTROY_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const MERGE_TASKS = 'MERGE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASKS';
export const UPDATE_TIMESTAMP_ARR = 'UPDATE_TIMESTAMP_ARR';
export const REMOVE_FROM_TIMESTAMP_ARR = 'REMOVE_FROM_TIMESTAMP_ARR';
export const UPDATE_GOAL_ARR = 'UPDATE_GOAL_ARR';
export const TASK_ERROR = 'TASK_ERROR';

export const requestTasks = () => ({
    type: REQUEST_TASKS,
});

export const requestTask = id => ({
    type: REQUEST_TASK,
    id
});

export const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
});

export const mergeTasks = tasks => ({
    type: MERGE_TASKS,
    tasks
});

export const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
});

export const removeTask = task => ({
    type: REMOVE_TASK,
    task
});

export const createTask = (task, goals) => ({
    type: CREATE_TASK,
    task,
    goals
});

export const updateTask = task => ({
    type: UPDATE_TASK,
    task
});

export const destroyTask = task => ({
    type: DESTROY_TASK,
    task
});

export const updateGoalArr = (taskId, goalId) => ({
    type: UPDATE_GOAL_ARR,
    taskId,
    goalId
});

export const updateTimestampArr = (taskId, timestampId) => ({
    type: UPDATE_TIMESTAMP_ARR,
    taskId,
    timestampId
});

export const removeFromTimestampArr = (taskId, timestampId) => ({
    type: REMOVE_FROM_TIMESTAMP_ARR,
    taskId,
    timestampId
});

export const taskError = error => ({
    type: TASK_ERROR,
    error
});
