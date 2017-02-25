import { axioss, ROOT_URL } from '../../common/config';

export const fetchTasks = (success) => {
  axioss.get(`tasks`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const fetchTask = (id, success) => {
  axioss.get(`tasks/${id}`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const createTask = (task, success, error) => {
  // debugger;
  axioss.post(`tasks`, task)
  .then(success)
  .catch(error);
};

export const updateTask = (task, success) => {
  axioss.patch(`tasks/${task.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const destroyTask = (task, success) => {
  axioss.delete(`tasks/${task.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};