import { editStoredTimestamp, editStoredTaskId, storeOldTaskId} from '../../timestampEditor/redux/actions';
import {hashHistory} from 'react-router';
export const RECEIVE_WEEKS = 'RECEIVE_WEEKS';

export const receiveWeeks = payload => ({
  type: RECEIVE_WEEKS,
  payload
});

export const populateTimestampEditorAndRedirect = (task, timestamp) => {
  return (dispatch) => {
    
    dispatch(storeOldTaskId(task.id));
    dispatch(editStoredTaskId(task.id));
    dispatch(editStoredTimestamp('id', timestamp.id));
    dispatch(editStoredTimestamp('start', timestamp.start));
    dispatch(editStoredTimestamp('end', timestamp.end));

    hashHistory.push('calendar/timestamp-editor');
  };
};

    // let startArr = moment(timestamp.start).format("h mm A").split(" ");
    // let endArr = moment(timestamp.end).format("h mm A").split(" ");
    
    // let start = {hours: startArr[0], minutes: startArr[1], meridiem: startArr[2] };
    // let end = {hours: endArr[0], minutes: endArr[1], meridiem: endArr[2] };

    // debugger;

    // dispatch(editStoredTaskId('taskId', task.id));
    // dispatch(editStoredTimestamp('start',  start));
    // dispatch(editStoredTimestamp('end',  end));