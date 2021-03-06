import React from "react";
import GreetingContainer from "./greeting_container.jsx";

const App = ({children}) => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
