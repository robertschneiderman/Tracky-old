import { editStoredTimestamp } from '../../timestampEditor/redux/actions';
import {hashHistory} from 'react-router';
export const RECEIVE_WEEKS = 'RECEIVE_WEEKS';

export const receiveWeeks = payload => ({
  type: RECEIVE_WEEKS,
  payload
});

export const populateTimestampEditorAndRedirect = (task, timestamp) => {
  return (dispatch) => {
    dispatch(editStoredTimestamp('taskId', task.id));
    dispatch(editStoredTimestamp('timestamp', timestamp));

    hashHistory.push('calendar/timestamp-editor');
  };
};