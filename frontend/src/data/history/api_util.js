import { axioss, ROOT_URL } from '../../common/config';

export const fetchHistorys = (success) => {
  axioss.get(`historys`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const fetchHistory = (id, success) => {
  axioss.get(`historys/${id}`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const createHistory = (id, success, error) => {
  axioss.defaults.headers.common['x-auth'] = localStorage.getItem('token');  
  axioss.post(`historys`, {id})
  .then(success)
  .catch(error);
};

export const updateHistory = (history, success) => {
  axioss.patch(`historys/${history.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const destroyHistory = (history, success) => {
  axioss.delete(`historys/${history.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};