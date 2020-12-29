import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Header from "./header";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
