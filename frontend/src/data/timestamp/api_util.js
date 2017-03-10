import { axioss, ROOT_URL } from '../../common/config';

export const fetchTimestamps = (success) => {
  axioss.get(`timestamps`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const fetchTimestamp = (id, success) => {
  axioss.get(`timestamps/${id}`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const createTimestamp = (timestamp, success, error) => {
  axioss.post(`timestamps`, timestamp)
  .then(success)
  .catch(error);
};

export const finishTimestamp = (timestamp, success) => {
  axioss.patch(`timestamps/${timestamp.id}`, timestamp)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const updateTimestamp = (taskId, timestamp, success) => {
  axioss.patch(`tasks/${taskId}/timestamps`, timestamp)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const destroyTimestamp = (timestamp, success) => {
  axioss.delete(`timestamps/${timestamp.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};