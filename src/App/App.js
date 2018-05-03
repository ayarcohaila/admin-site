import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import NotificationSystem from "react-notification-system";
import { notifications } from "../_helpers/notifications";

import { history } from "../_helpers";
import authenticatedRoutes from "../routes/authenticatedRoutes";
import guestRoutes from "../routes/guestRoutes";

class App extends React.Component {
  componentDidMount() {
    notifications.setNotificationSystem(this.refs.notificationSystem);
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <Router history={history}>
          <Route
            path="/"
            render={loggedIn ? authenticatedRoutes : guestRoutes}
          />
        </Router>
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { token } }) => ({
  loggedIn: !!token
});

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
