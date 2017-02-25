import store from '../../../common/store'; 

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: 'AUTH_USER' });
}