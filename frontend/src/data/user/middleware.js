import { normalize, Schema } from 'normalizr';
import {userSchema, historySchema, taskSchema, goalSchema, timestampSchema} from './schemas';
import {objToArr} from '../../common/helpers/selectors';
import { receiveWeeks } from '../../pages/calendar/redux/actions';
import { receiveHistorys } from '../history/actions';
import { receiveTasks } from '../task/actions';
import { receiveGoals } from '../goal/actions';
import { receiveTimestamps } from '../timestamp/actions';
// User API Util
import { fetchUsers,
         fetchUser,
         createUser,
         updateUser,
         destroyUser
       } from './api_util';
// User Action
import { requestUsers,
         requestUser,
         receiveUser,
         receiveUsers,
         removeUser,
         userError,
// User Constants
         REQUEST_USERS,
         REQUEST_USER,
         CREATE_USER,
         UPDATE_USER,
         DESTROY_USER,
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  const usersSuccess = res => dispatch(receiveUsers(res.data));
  const userSuccess = res => {
    const normalized = normalize(res.data, userSchema);
    let {users, historys, tasks, goals, timestamps} = normalized.entities;
    let user = objToArr(users)[0];
    dispatch(receiveTimestamps(timestamps));
    dispatch(receiveGoals(goals));
    dispatch(receiveTasks(tasks));
    dispatch(receiveHistorys(historys));
    dispatch(receiveWeeks(user.historys));
    dispatch(receiveUser(user));
  };
  const userRemoved = res => dispatch(removeUser(res.data));
  const userErrored = res => dispatch(userError(res.data.responseJSON));
  switch(action.type){
    case REQUEST_USERS:
      fetchUsers(userSuccess);
      return next(action);
    case REQUEST_USER:
      fetchUser(action.id, userSuccess);
      return next(action);
    case CREATE_USER:
      createUser(action.id, userSuccess, userErrored);
      return next(action);
    case UPDATE_USER:
      updateUser(action.user, userSuccess);
      return next(action);
    case DESTROY_USER:
      destroyUser(action.user, userRemoved);
      return next(action);
    default:
      return next(action);
  }
};