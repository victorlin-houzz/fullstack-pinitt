import SessionActions from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(SessionActions.receiveCurrentUser(user));
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

    default:
      return next(action);

  }
};
