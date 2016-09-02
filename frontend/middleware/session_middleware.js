import SessionActions from '../actions/session_actions';
import { hashHistory } from 'react-router';

import { login, signup, logout, fetchUser } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => {
    dispatch(SessionActions.receiveCurrentUser(user));
  };

  const successUserCallback = user => {
    dispatch(SessionActions.receiveUser(user));
  };
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(SessionActions.receiveErrors(errors));
  };
  switch(action.type){
    case SessionActions.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);

    case SessionActions.LOGOUT:
      logout(() => console.log('logging out...'));
      return next(action);

    case SessionActions.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);

    case SessionActions.FETCH_USER:
      fetchUser(action.username, successUserCallback, errorCallback);
      return next(action);

    default:
      return next(action);

  }
};
