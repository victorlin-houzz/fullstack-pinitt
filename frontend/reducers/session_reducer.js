import SessionActions from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  user: {},
  errors: []
});

const SessionReducer = function(state = _nullUser, action){
  switch(action.type){
    case SessionActions.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});

    case SessionActions.RECEIVE_USER: {
      const newState = merge({}, {currentUser: state.currentUser}, {user: action.user});
      return newState;
    }

    case SessionActions.LOGOUT: {
      const newState = merge({}, _nullUser);
      return newState;
    }

    case SessionActions.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});

    default:
      return state;
  }
};



export default SessionReducer;
