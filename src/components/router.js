import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ContentDetail from "../pages/contentDetail";
import Home from "../pages/home";
import Login from "../pages/login";
import MyPage from "../pages/myPage/myPage";
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
        <Route path="/mypage" component={MyPage} />
        <Route path="/contents" component={ContentDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
