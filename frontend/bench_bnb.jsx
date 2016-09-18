import React from  "react";
import ReactDOM from  "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/root.jsx";
import * as API from "./util/session_api_util.js";
import {login, signup, logout} from "./actions/session_actions.js";

document.addEventListener("DOMContentLoaded", () => {
  // window: javascript;
  window.login = login
  window.signup = signup
  window.logout = logout
    // window.signup = API.signup;
    // window.login = API.login;
    // window.logout = API.logout;
  const store = window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
