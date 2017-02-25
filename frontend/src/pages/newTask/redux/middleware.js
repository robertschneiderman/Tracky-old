// NewTask API Util
import { fetchNewTasks,
         fetchNewTask,
         createNewTask,
         updateNewTask,
         destroyNewTask
       } from './api_util';
// NewTask Action

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    default:
      return next(action);
  }
};