const SessionActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",

  signup: user => ({
    type: SessionActions.SIGNUP,
    user
  }),

  login: user => ({
    type: SessionActions.LOGIN,
    user
  }),

  logout: () => ({
    type: SessionActions.LOGOUT
  }),

  receiveCurrentUser: currentUser => ({
    type: SessionActions.RECEIVE_CURRENT_USER,
    currentUser
  }),

  receiveErrors: errors => ({
    type: SessionActions.RECEIVE_ERRORS,
    errors
  })
};
export default SessionActions;
