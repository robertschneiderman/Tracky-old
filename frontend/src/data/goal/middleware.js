// Goal API Util
import { fetchGoals,
         fetchGoal,
         createGoals,
         updateGoal,
         destroyGoal
       } from './api_util';
// Goal Action
import { requestGoals,
         requestGoal,
         receiveGoal,
         receiveGoals,
         removeGoal,
         goalError,
// Goal Constants
         REQUEST_GOALS,
         REQUEST_GOAL,
         CREATE_GOALS,
         UPDATE_GOAL,
         DESTROY_GOAL,
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  const goalsSuccess = res => dispatch(receiveGoals(res.data));
  const goalSuccess = res => dispatch(receiveGoal(res.data));
  const goalRemoved = res => dispatch(removeGoal(res.data));
  const goalErrored = res => dispatch(goalError(res.data.responseJSON));
  switch(action.type){
    case REQUEST_GOALS:
      fetchGoals(goalSuccess);
      return next(action);
    case REQUEST_GOAL:
      fetchGoal(action.id, goalSuccess);
      return next(action);
    case CREATE_GOALS:
      createGoals(action.goals, goalSuccess, goalErrored);
      return next(action);
    case UPDATE_GOAL:
      updateGoal(action.goal, goalSuccess);
      return next(action);
    case DESTROY_GOAL:
      destroyGoal(action.goal, goalRemoved);
      return next(action);
    default:
      return next(action);
  }
};