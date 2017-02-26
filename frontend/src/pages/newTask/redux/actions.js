// import { createTask } from '../../../data/task/actions'
import { axioss } from '../../../common/config';
import {hashHistory} from 'react-router';

export const CHANGE_NEW_TASK_FIELD = 'CHANGE_NEW_TASK_FIELD';
export const CREATE_TASK_AND_GOALS = 'CREATE_TASK_AND_GOALS';

export const changeNewTaskField = (key, payload) => ({
  type: CHANGE_NEW_TASK_FIELD,
  key,
  payload
});

export const createTaskAndGoals = (task, goals) => {
  return (dispatch) => {
    let resultGoals = [];
    for (let key in goals) {
      let target = goals[key];
      if (task.type === 'time') target *= 60;
      resultGoals.push({interval: key, target});
    }
    dispatch({type: "CREATE_TASK", task, goals: resultGoals});
    // let {name, color, icon, type, historyId} = payload;
    // let task = {name, color, icon, type, historyId};

    // axioss.post('tasks', task).then((res) => {
    //   // debugger;
    //   dispatch({type: "RECEIVE_TASK", task: res.data});
    //   dispatch({type: "UPDATE_TASK_ARR", historyId: res.data.historyId, taskId: res.data.id});

    //   axioss.post('goals', resultGoals).then((res) => {
    //     dispatch({type: "RECEIVE_GOALS", goals: res.data});
    //     hashHistory.push('dashboard');
    //   }).catch(e => {
    //     console.log(e);
    //   });
    // }).catch(e => console.log(e));
  };
};
