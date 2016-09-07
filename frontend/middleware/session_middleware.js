import SessionActions from '../actions/session_actions';
import BoardActions from '../actions/board_actions';
import { hashHistory } from 'react-router';

import { login, signup, logout, fetchUser, followUser, unfollowUser } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => {
    dispatch(SessionActions.receiveCurrentUser(user));
    dispatch(BoardActions.fetchBoards(user.id));
  };

  const successUserCallback = user => {
    dispatch(SessionActions.receiveUser(user));
    dispatch(BoardActions.fetchBoards(user.id));
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

    case SessionActions.FOLLOW_USER:
      followUser(action.id, successUserCallback, errorCallback);
      return next(action);

    case SessionActions.UNFOLLOW_USER:
      unfollowUser(action.id, successUserCallback, errorCallback);
      return next(action);

    default:
      return next(action);

  }
};
