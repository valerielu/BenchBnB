export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const login = (credentials) => ({
  type: SessionConstants.LOGIN,
  credentials
});
export const signup = (credentials) => ({
  type: SessionConstants.SIGNUP,
  credentials
});
export const receiveCurrentUser = (currentUser) => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});
export const receiveErrors = (errors) => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
export const logout = () => ({
  type: SessionConstants.LOGOUT
});
