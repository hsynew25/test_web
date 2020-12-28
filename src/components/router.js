import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home";
import Header from "./header";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
