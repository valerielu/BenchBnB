import * as Actions from "../actions/session_actions.js";
import merge from "lodash/merge";

const preloadedState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = preloadedState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case Actions.SessionConstants.RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case Actions.SessionConstants.RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case Actions.SessionConstants.LOGOUT:
      newState.currentUser = null;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
