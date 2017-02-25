// Dashboard API Util
import { 
       } from './api_util';
// Dashboard Action
import { 
// Dashboard Constants
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    default:
      return next(action);
  }
};