import { axioss, ROOT_URL } from '../../../common/config';

export const createTemplate = (newtask, success, error) => {
  axioss.post(`newtasks`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};