import merge from 'lodash/merge';

export default function(state = {}, action) {
  switch(action.type) {
    case 'AUTH_USER':
      return merge({}, state, {authenticated: true } );
    case 'UNAUTH_USER':
      return { state, authenticated: false };
    case 'AUTH_ERROR':
      return { state, error: action.payload };
  }

  return state;
}