import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { LoginPage } from "layouts/LoginPage";

const guestRoutes = () => (
  <Switch>
    <Route path="/login" exact component={LoginPage} />
    <Redirect to="/login" />
  </Switch>
);

export default withRouter(guestRoutes);
