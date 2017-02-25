import { updateTaskArr } from '../history/actions';

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
    dispatch(receiveTask(res.data));
    dispatch(updateTaskArr(res.data.historyId, res.data.id));
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
      createTask(action.task, taskSuccess, taskErrored);
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