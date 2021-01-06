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
import Upload from "../pages/upload";
import PrivateRoute from "./privateRoute";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/contents/:id" component={ContentDetail} />
        <PrivateRoute path="/mypage" component={MyPage} />
        <PrivateRoute path="/upload" component={Upload} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
