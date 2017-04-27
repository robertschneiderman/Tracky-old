import { normalize, Schema } from 'normalizr';
import {userSchema, taskSchema, goalSchema, timestampSchema} from '../user/schemas';
import { mergeGoals } from '../goal/actions';
import { objToArr } from '../../common/helpers/selectors';
import {hashHistory} from 'react-router';

import { updateTaskArr } from '../user/actions';

// Task API Util
import { fetchTasks,
         fetchTask,
         createTask,
         updateTask,
         destroyTask
       } from './api_util';
// Task Action
import { requestTasks,
         requestTask,
         receiveTask,
         receiveTasks,
         removeTask,
         updateGoalArr,
         taskError,
// Task Constants
         REQUEST_TASKS,
         REQUEST_TASK,
         CREATE_TASK,
         UPDATE_TASK,
         DESTROY_TASK,
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  const tasksSuccess = res => dispatch(receiveTasks(res.data));
  const taskSuccess = res => {
    const normalized = normalize(res.data, taskSchema);
    let { tasks, goals } = normalized.entities;
    let task = Object.values(tasks)[0];
    goals = objToArr(goals);
    let goalIds = goals.map(goal => goal.id);

    dispatch(mergeGoals(goals));
    dispatch(receiveTask(task));
    dispatch(updateGoalArr(goals[0].taskId, goalIds)); 
    dispatch(updateTaskArr(parseInt(localStorage.getItem('currentUser')), task.id)); 
    // hashHistory.push('dashboard');
  };
  const taskRemoved = res => dispatch(removeTask(res.data));
  const taskErrored = res => dispatch(taskError(res.data));
  switch(action.type){
    case REQUEST_TASKS:
      fetchTasks(taskSuccess);
      return next(action);
    case REQUEST_TASK:
      fetchTask(action.id, taskSuccess);
      return next(action);
    case CREATE_TASK:
      createTask(action.task, action.goals, taskSuccess, taskErrored);
      return next(action);
    case UPDATE_TASK:
      updateTask(action.task, taskSuccess);
      return next(action);
    case DESTROY_TASK:
      destroyTask(action.task, taskRemoved);
      return next(action);
    default:
      return next(action);
  }
};