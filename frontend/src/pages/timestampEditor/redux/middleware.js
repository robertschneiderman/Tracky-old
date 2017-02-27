// TimestampEditor API Util
import { 
       } from './api_util';
// TimestampEditor Action
import { 
// TimestampEditor Constants
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    default:
      return next(action);
  }
};