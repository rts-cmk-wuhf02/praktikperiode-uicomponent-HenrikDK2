import React, { useContext } from "react";
import { Route, Link } from "react-router-dom";
import Index from "./components/pages/Index";

const App = () => {
  return (
    <Route exact path="/">
      <Index />
    </Route>
  );
};

export default App;
