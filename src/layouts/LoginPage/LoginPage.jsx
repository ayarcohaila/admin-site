import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { authActions } from "../../_actions";
import Card from "components/Card/Card.jsx";

import {
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Grid,
  Row,
  Col
} from "react-bootstrap";

import "assets/css/Login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: "",
        error: null
      },
      password: {
        value: "",
        error: null
      }
    };
  }

  validate = fieldName => {
    this.setState({
      [fieldName]: {
        ...this.state[fieldName],
        error: this.state[fieldName].value ? null : fieldName + " is required"
      }
    });
    return !!this.state[fieldName].value;
  };

  validateAll = () => {
    const emailValidated = this.validate("email");
    const passwordValidated = this.validate("password");
    return emailValidated && passwordValidated;
  };

  handleChange = fieldName => evt => {
    if (evt.target.value !== "") {
      this.setState({
        [fieldName]: {
          ...this.state[fieldName],
          value: evt.target.value,
          error: null
        }
      });
    } else {
      this.setState({
        [fieldName]: {
          ...this.state[fieldName],
          value: evt.target.value
        }
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { login } = this.props;

    if (this.validateAll()) {
      login(email.value, password.value);
    }
  };

  render() {
    const { authLoading } = this.props;
    const { email, password } = this.state;

    return (
      <div className="Login">
        <Grid fluid>
          <Row>
            <Col sm={12} md={4} mdOffset={4}>
              <Card
                title="Login to your account"
                hCenter="text-center"
                content={
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup
                      controlId="email"
                      bsSize="large"
                      validationState={email.error ? "error" : undefined}
                    >
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        autoFocus
                        type="email"
                        placeholder="Email"
                        value={email.value}
                        onChange={this.handleChange("email")}
                      />
                      {email.error && <HelpBlock>{email.error}</HelpBlock>}
                    </FormGroup>
                    <FormGroup
                      controlId="password"
                      bsSize="large"
                      validationState={password.error ? "error" : undefined}
                    >
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        type="password"
                        placeholder="Password"
                        value={password.value}
                        onChange={this.handleChange("password")}
                      />
                      {password.error && (
                        <HelpBlock>{password.error}</HelpBlock>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Button
                        block
                        className="btn-fill"
                        bsStyle="primary"
                        // bsSize="large"
                        type="submit"
                        disabled={authLoading}
                      >
                        {authLoading ? "Loading..." : "Login"}
                      </Button>
                      <Link to="/signup" className="signup-link">
                        <h5>Click here to sign up</h5>
                      </Link>
                    </FormGroup>
                  </Form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { loading, error } }) => ({
  authLoading: loading
});

const mapDispatchProps = {
  login: authActions.login
};

const connectedLoginPage = connect(mapStateToProps, mapDispatchProps)(
  LoginPage
);

export { connectedLoginPage as LoginPage };
