import React from "react";
import { Link } from 'react-router';


const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
        Welcome!
        {currentUser.username}
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    );

  } else {
    return (
      <nav>
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
  }
};

export default Greeting;
