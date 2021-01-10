import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ContentDetail from "../pages/contentDetail";
import ContentUpdate from "../pages/contentUpdate";
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
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/contents/:id" exact component={ContentDetail} />
        <PrivateRoute path="/mypage" exact component={MyPage} />
        <PrivateRoute path="/upload" exact component={Upload} />
        <PrivateRoute
          path="/contents/update/:id"
          exact
          component={ContentUpdate}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
