export const REQUEST_GOALS = 'REQUEST_GOALS';
export const REQUEST_GOAL = 'REQUEST_GOAL';
export const CREATE_GOALS = 'CREATE_GOALS';
export const UPDATE_GOAL = 'UPDATE_GOAL';
export const DESTROY_GOAL = 'DESTROY_GOAL';
export const RECEIVE_GOALS = 'RECEIVE_GOALS';
export const RECEIVE_GOAL = 'RECEIVE_GOAL';
export const MERGE_GOALS = 'MERGE_GOALS';
export const INCREMENT_GOALS = 'INCREMENT_GOALS';
export const REMOVE_GOAL = 'REMOVE_GOALS';
export const GOAL_ERROR = 'GOAL_ERROR';

export const requestGoals = () => ({
    type: REQUEST_GOALS,
});

export const requestGoal = id => ({
    type: REQUEST_GOAL,
    id
});

export const receiveGoals = goals => ({
    type: RECEIVE_GOALS,
    goals
});

export const receiveGoal = goal => ({
    type: RECEIVE_GOAL,
    goal
});

export const mergeGoals = goal => ({
    type: MERGE_GOALS,
    goal
});

export const removeGoal = goal => ({
    type: REMOVE_GOAL,
    goal
});

export const createGoals = goals => ({
    type: CREATE_GOALS,
    goals
});

export const updateGoal = (id, goal) => ({
    type: UPDATE_GOAL,
    id,
    goal
});

export const incrementGoals = (taskId, amount) => ({
    type: INCREMENT_GOALS,
    taskId,
    amount
});

export const destroyGoal = goal => ({
    type: DESTROY_GOAL,
    goal
});

export const goalError = error => ({
    type: GOAL_ERROR,
    error
});
