import { axioss } from '../../../common/config';
import {hashHistory} from 'react-router';

export const CHANGE_NEW_TASK_FIELD = 'CHANGE_NEW_TASK_FIELD';
export const CREATE_TASK_AND_GOALS = 'CREATE_TASK_AND_GOALS';

export const changeNewTaskField = payload => ({
  type: CHANGE_NEW_TASK_FIELD,
  payload
});

export const createTaskAndGoals = (task, goals) => {
  return (dispatch) => {
    // let {name, color, icon, type, historyId} = payload;
    // let task = {name, color, icon, type, historyId};
    axioss.post('tasks', task).then((res) => {
      dispatch({type: "UPDATE_TASK_ARR", historyId: res.data.historyId, taskId: res.data.id});
      dispatch({type: "RECEIVE_TASK", task: res.data});
      let resultGoals = [];
      for(let key in goals) {
        resultGoals.push({interval: key, target: goals[key], taskId: res.data.id});
      }

      axioss.post('goals', resultGoals).then((res) => {
        dispatch({type: "RECEIVE_GOALS", goals: res.data});
        hashHistory.push('dashboard');
      }).catch(e => {
        // debugger;
        console.log(e.response.data.message);
      });
    }).catch(e => console.log(e));
  };
};
