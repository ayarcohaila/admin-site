import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";
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

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: {
        value: "",
        error: null
      },
      FirstName: {
        value: "",
        error: null
      },
      LastName: {
        value: "",
        error: null
      },
      EmailAddress: {
        value: "",
        error: null
      },
      Password: {
        value: "",
        error: null
      }
    };
  }

  validate = fieldName => {
    this.setState({
      [fieldName]: {
        ...this.state[fieldName],
        error: this.state[fieldName].value ? null : "This field is required"
      }
    });
  };

  validateAll = () => {
    const idValidated = this.validate("id");
    const firstNameValidated = this.validate("firstName");
    const lastNameValidated = this.validate("lastName");
    const emailValidated = this.validate("email");
    const passwordValidated = this.validate("password");
    return (
      idValidated &&
      firstNameValidated &&
      lastNameValidated &&
      emailValidated &&
      passwordValidated
    );
  };

  handleChange = fieldName => evt => {
    this.setState({
      [fieldName]: {
        ...this.state[fieldName],
        value: evt.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { id, firstName, lastName, email, password } = this.state;
    const { register } = this.props;

    if (this.validateAll()) {
      register(
        id.value,
        firstName.value,
        lastName.value,
        email.value,
        password.value
      );
    }
  };

  render() {
    const { registerLoading } = this.props;
    const { id, firstName, lastName, email, password } = this.state;
    return (
      <div className="Register">
        <Grid fluid>
          <Row>
            <Col sm={12} md={4} mdOffset={4}>
              <Card
                title="Register to the site"
                hCenter="text-center"
                content={
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup
                      controlId="firstName"
                      bsSize="large"
                      validationState={firstName.error ? "error" : undefined}
                    >
                      <ControlLabel>First Name</ControlLabel>
                      <FormControl
                        autoFocus
                        type="text"
                        placeholder="Frist Name"
                        value={firstName.value}
                        onChange={this.handleChange("firstName")}
                      />
                      {firstName.error && (
                        <HelpBlock>{firstName.error}</HelpBlock>
                      )}
                    </FormGroup>
                    <FormGroup
                      controlId="lastName"
                      bsSize="large"
                      validationState={lastName.error ? "error" : undefined}
                    >
                      <ControlLabel>Last Name</ControlLabel>
                      <FormControl
                        autoFocus
                        type="text"
                        placeholder="Last Name"
                        value={lastName.value}
                        onChange={this.handleChange("lastName")}
                      />
                      {lastName.error && (
                        <HelpBlock>{lastName.error}</HelpBlock>
                      )}
                    </FormGroup>
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
                        disabled={registerLoading}
                      >
                        {registerLoading ? "Loading..." : "Register"}
                      </Button>
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
