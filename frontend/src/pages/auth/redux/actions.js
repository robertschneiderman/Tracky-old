import axios from 'axios';
import { hashHistory } from 'react-router';

const ROOT_URL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'https://traky.herokuapp.com';
// const ROOT_URL = 'https://trackyy.herokuapp.com';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.user.id);
        
        const currentUser = localStorage.getItem('currentUser');        
        dispatch({ type: 'REQUEST_USER', id: currentUser });

        dispatch({ type: 'AUTH_USER', payload: response.data.user });
        hashHistory.push('dashboard');
      })
      .catch(() => {
        dispatch(authError("Bad Login Info"));
      });
  };
}

export function signupUser({ email, name, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, name, password})
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.id);        
        dispatch({ type: 'AUTH_USER' });
        hashHistory.push('dashboard');
      })
      .catch(() => {
        dispatch(authError("Bad Signup Info"));
      });
      // .catch(response => dispatch(authError(response.data.error)))
  };
}

export function authError(error) {
  return {
    type: 'AUTH_ERROR',
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  return function(dispatch) {
    dispatch({ type: "SIGNOUT" });
    dispatch({ type: 'UNAUTH_USER' });
  };
}