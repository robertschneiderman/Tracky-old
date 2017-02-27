export { updateTimestamp } from '../../../data/timestamp/actions';
export const EDIT_STORED_TIMESTAMP = 'EDIT_STORED_TIMESTAMP';
export const EDIT_STORED_TASK_ID = 'EDIT_STORED_TASK_ID';
export const STORE_TIMESTAMP = 'STORE_TIMESTAMP';

export const editStoredTimestamp = (key, value) => ({
  type: EDIT_STORED_TIMESTAMP,
  key,
  value
});

export const editStoredTaskId = payload => ({
  type: EDIT_STORED_TASK_ID,
  payload
});

export const storeTimestamp = payload => ({
  type: STORE_TIMESTAMP,
  payload
});
