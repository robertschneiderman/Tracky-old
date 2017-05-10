import { editStoredTimestamp, populateState} from '../../timestampEditor/redux/actions';
import {hashHistory} from 'react-router';
import { normalize, Schema } from 'normalizr';
import {userSchema, taskSchema, goalSchema, timestampSchema} from '../../../data/user/schemas';
import { objToArr } from '../../../common/helpers/selectors';
// import { adjustedWeek } from '../../../common/helpers/timeHelpers';
import { updateTimestampArr } from '../../../data/task/actions';
import { mergeGoals } from '../../../data/goal/actions';
import { receiveTimestamps } from '../../../data/timestamp/actions';
import {axioss} from '../../../common/config';
export const RECEIVE_WEEKS = 'RECEIVE_WEEKS';
export const TOGGLE_WEEK = 'TOGGLE_WEEK';

export const receiveWeeks = (payload) => {
  return {
    type: RECEIVE_WEEKS,
    payload
  };
};

export const requestAndToggleWeek = (inc, week) => {
  return dispatch => {
    axioss.get(`timestamps/${week}`).then(res => {
      let timestamps = res.data;
      let timestampIds = timestamps.map(ts => ts.id);

      dispatch(receiveTimestamps(timestamps));
      timestamps.forEach(ts => {
        dispatch(updateTimestampArr(ts.taskId, ts.id));
      });

      // dispatch(receiveWeeks(Object.keys(historys)));
      dispatch({type: TOGGLE_WEEK, payload: inc });
    });
  };
};

export const populateTimestampEditorAndRedirect = (mode, task, timestamp) => {
  return (dispatch) => {
    dispatch(populateState({
        mode,
        oldTaskId: task.id,
        taskId: task.id,
        originalTimestamp: {
            start: timestamp.start,
            end: timestamp.end,
        },
        timestamp: {
            id: timestamp.id,
            start: timestamp.start,
            end: timestamp.end,
        }
    }));

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