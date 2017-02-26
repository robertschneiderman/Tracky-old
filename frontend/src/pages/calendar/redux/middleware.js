// Calendar API Util
import { 
       } from './api_util';
// Calendar Action
import { 
// Calendar Constants
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    default:
      return next(action);
  }
};