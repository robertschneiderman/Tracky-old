import { axioss, ROOT_URL } from '../../common/config';

export const fetchGoals = (success) => {
  axioss.get(`goals`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const fetchGoal = (id, success) => {
  axioss.get(`goals/${id}`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const createGoals = (goals, success, error) => {
  axioss.post(`goals`, goals)
  .then(success)
  .catch(error);
};

export const updateGoal = (id, goal, success) => {
  axioss.patch(`goals/${id}`, goal)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const incrementGoals = (id, timestamp, success) => {
  debugger;
  axioss.patch(`/task/${id}/goals`, {timestamp})
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const destroyGoal = (goal, success) => {
  axioss.delete(`goals/${goal.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};