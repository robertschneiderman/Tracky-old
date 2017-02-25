// History API Util
import { fetchHistorys,
         fetchHistory,
         createHistory,
         updateHistory,
         destroyHistory
       } from './api_util';
// History Action
import { requestHistorys,
         requestHistory,
         receiveHistory,
         receiveHistorys,
         removeHistory,
         historyError,
// History Constants
         REQUEST_HISTORYS,
         REQUEST_HISTORY,
         CREATE_HISTORY,
         UPDATE_HISTORY,
         DESTROY_HISTORY,
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  const historysSuccess = res => dispatch(receiveHistorys(res.data));
  const historySuccess = res => dispatch(receiveHistory(res.data));
  const historyRemoved = res => dispatch(removeHistory(res.data));
  const historyErrored = res => dispatch(historyError(res.data));
  switch(action.type){
    case REQUEST_HISTORYS:
      fetchHistorys(historySuccess);
      return next(action);
    case REQUEST_HISTORY:
      fetchHistory(action.id, historySuccess);
      return next(action);
    case CREATE_HISTORY:
      createHistory(action.id, historySuccess, historyErrored);
      return next(action);
    case UPDATE_HISTORY:
      updateHistory(action.history, historySuccess);
      return next(action);
    case DESTROY_HISTORY:
      destroyHistory(action.history, historyRemoved);
      return next(action);
    default:
      return next(action);
  }
};