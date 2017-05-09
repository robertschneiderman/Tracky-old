import { normalize, Schema } from 'normalizr';
import {taskSchema} from '../user/schemas';
import { updateTimestampArr, receiveTask, updateGoalArr } from '../task/actions';
import { objToArr } from '../../common/helpers/selectors';
import { receiveGoals } from '../goal/actions';

// Timestamp API Util
import { fetchTimestamps,
         fetchTimestamp,
         createTimestamp,
         finishTimestamp,
         updateTimestamp,
         destroyTimestamp
       } from './api_util';
// Timestamp Action
import { requestTimestamps,
         requestTimestamp,
         receiveTimestamp,
         receiveTimestamps,
         removeTimestamp,
         timestampError,
// Timestamp Constants
         REQUEST_TIMESTAMPS,
         REQUEST_TIMESTAMP,
         CREATE_TIMESTAMP,
         FINISH_TIMESTAMP,
         UPDATE_TIMESTAMP,
         DESTROY_TIMESTAMP,
       } from './actions';

import { incrementGoals } from '../goal/actions';       

export default ({getState, dispatch}) => next => action => {
  const timestampsSuccess = res => dispatch(receiveTimestamps(res.data));
  const timestampSuccess = res => {
    const normalized = normalize(res.data, taskSchema);
    let { tasks, goals, timestamps } = normalized.entities;
    // let task = Object.values(tasks)[0];
    // goals = objToArr(goals);
    let timestamp = objToArr(timestamps)[0];
    // let goalIds = goals.map(goal => goal.id);

    // debugger;
    dispatch(receiveGoals(goals));
    // dispatch(updateGoalArr(goals[0].taskId, goalIds)); 

    dispatch(receiveTimestamp(timestamp));
    dispatch(updateTimestampArr(timestamp.taskId, timestamp.id));
    // dispatch(incrementGoals(res.data.taskId, res.data));
  };
  const timestampUpdateSuccess = res => dispatch(receiveTimestamp(res.data));  
  const timestampRemoved = res => dispatch(removeTimestamp(res.data));
  const timestampErrored = res => dispatch(timestampError(res.data));
  switch(action.type){
    case REQUEST_TIMESTAMPS:
      fetchTimestamps(timestampSuccess);
      return next(action);
    case REQUEST_TIMESTAMP:
      fetchTimestamp(action.id, timestampSuccess);
      return next(action);
    case CREATE_TIMESTAMP:
      createTimestamp(action.timestamp, timestampSuccess, timestampErrored);
      return next(action);
    case FINISH_TIMESTAMP:
      finishTimestamp(action.timestamp, timestampUpdateSuccess);
      return next(action);
    case UPDATE_TIMESTAMP:
      updateTimestamp(action.id, action.timestamp, timestampSuccess);
      return next(action);
    case DESTROY_TIMESTAMP:
      destroyTimestamp(action.timestamp, timestampRemoved);
      return next(action);
    default:
      return next(action);
  }
};