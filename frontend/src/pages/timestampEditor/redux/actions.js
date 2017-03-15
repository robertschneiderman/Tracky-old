export { createTimestamp, updateTimestamp, destroyTimestamp } from '../../../data/timestamp/actions';
export { removeFromTimestampArr } from '../../../data/task/actions';
export { incrementGoals } from '../../../data/goal/actions';
export const EDIT_STORED_TIMESTAMP = 'EDIT_STORED_TIMESTAMP';
export const EDIT_STORED_STATE = 'EDIT_STORED_STATE';
export const POPULATE_STATE = 'POPULATE_STATE';

export const editStoredTimestamp = (key, value) => ({
  type: EDIT_STORED_TIMESTAMP,
  key,
  value
});

export const editStoredState = (key, value) => ({
  type: EDIT_STORED_STATE,
  key,
  value
});

export const populateState = payload => ({
  type: POPULATE_STATE,
  payload
});
