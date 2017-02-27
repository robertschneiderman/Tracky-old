export { createTimestamp, finishTimestamp } from '../../../data/timestamp/actions';
export { incrementGoals } from '../../../data/goal/actions';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';

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

export const startTimer = payload => ({
  type: START_TIMER,
  payload
});

export const stopTimer = payload => ({
  type: STOP_TIMER,
  payload
});
