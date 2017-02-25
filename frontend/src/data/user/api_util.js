import { axioss, ROOT_URL } from '../../common/config';

export const fetchUsers = (success) => {
  axioss.get(`users`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const fetchUser = (id, success) => {
  axioss.get(`users/${id}`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const createUser = (user, success, error) => {
  axioss.post(`users`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const updateUser = (user, success) => {
  axioss.patch(`users/${user.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const destroyUser = (user, success) => {
  axioss.delete(`users/${user.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};