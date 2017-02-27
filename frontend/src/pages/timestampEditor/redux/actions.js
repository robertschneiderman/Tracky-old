export const EDIT_STORED_TIMESTAMP = 'EDIT_STORED_TIMESTAMP';

export const editStoredTimestamp = (key, value) => ({
  type: EDIT_STORED_TIMESTAMP,
  key,
  value
});
