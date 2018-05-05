import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { RegisterPage } from "layouts/RegisterPage/RegisterPage.js";

const registerRoutes = () => (
  <Switch>
    <Route path="/register" component={RegisterPage} />
    <Redirect to="/register" />
  </Switch>
);

export default withRouter(registerRoutes);
