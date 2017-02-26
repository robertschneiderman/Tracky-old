export { createTimestamp, updateTimestamp } from '../../../data/timestamp/actions';
export { incrementGoals } from '../../../data/goal/actions';

export const UPDATE_TIMER = 'UPDATE_TIMER';
export const SELECT_TASK = 'SELECT_TASK';

export const updateTimer = payload => ({
  type: UPDATE_TIMER,
  payload
});

export const selectTask = payload => ({
  type: SELECT_TASK,
  payload
});
