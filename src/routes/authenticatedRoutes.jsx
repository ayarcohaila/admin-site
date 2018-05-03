import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";

const authenticatedRoutes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Redirect to="/dashboard" />
  </Switch>
);

export default withRouter(authenticatedRoutes);
