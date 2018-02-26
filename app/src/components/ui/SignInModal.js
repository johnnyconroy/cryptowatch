// @flow
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import isValidPassword from '../../appUtils/signInHelpers';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

type State = {
  value: string,
  siEmail: string,
  siPassword: string,
  siLoading: boolean,
  suUsername: string,
  suEmail: string,
  suPassword: string,
  suPasswordErrorStyle: {
    color: string
  },
  suConfirmPassword: string,
  suConfirmPasswordStyle: Object,
  suLoading: boolean,
};

const styles = {
  button: {
    textTransform: 'none',
    width: '100%',
    marginTop: '30px',
  },
  tab: {
    textTransform: 'none',
    fontSize: '16px',
    maxHeight: 200,
    overflow: 'auto',
  },
  text: {
    position: 'relative',
    top: '5px',
    fontSize: '13px',
  },
  gray: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  blue: {
    color: 'rgb(0, 188, 212)',
  },
  orange: {
    color: 'orange',
  },
  red: {
    color: 'red',
  },
};

class SignInModal extends Component<{}, State> {
  state = {
    value: 'a',
    siEmail: '',
    siPassword: '',
    siLoading: false,
    suUsername: '',
    suEmail: '',
    suPassword: 'sup',
    suPasswordErrorStyle: styles.gray,
    suConfirmPassword: 'csup',
    suConfirmPasswordStyle: styles.red,
    suLoading: false,
  };

  onTabChange = (value: string) => {
    this.setState({ value });
  };

  onPasswordChange = (event: Object, password: string) => {
    if (password && password.length > 0) {
      if (isValidPassword(password)) {
        // TODO - implement a function that will validate the other requirements
        this.setState({ suPasswordErrorStyle: styles.gray });
      } else {
        this.setState({ suPasswordErrorStyle: styles.orange });
      }
    } else {
      this.setState({ suPasswordErrorStyle: styles.gray });
    }
    this.updateInputValue(event);
  };

  onConfirmPasswordChange = (event: Object, confirmPassword: string) => {
    if (this.state.suPassword === confirmPassword) {
      this.setState({ suConfirmPasswordStyle: styles.gray });
    }
    this.updateInputValue(event);
  };

  updateInputValue = (event: Object) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  signInUser = () => {
    this.setState({ siLoading: true });
  }

  signUpUser = () => {
    this.setState({ suLoading: true });
  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.onTabChange}
      >
        <Tab label="Sign-In" value="a" style={styles.tab}>
          <div>
            <TextField
              id="siEmail"
              hintText="email"
              floatingLabelText="email"
              onChange={this.updateInputValue}
            /><br />
            <TextField
              id="siPassword"
              hintText="password"
              floatingLabelText="password"
              onChange={this.updateInputValue}
            /><br />
            <a href="#" style={styles.text}>Forgot your password?</a>
            <SignInButton
              siLoading={this.state.siLoading}
              signInUser={this.signInUser}
              styles={styles}
            />
          </div>
        </Tab>
        <Tab label="Sign-Up" value="b" style={styles.tab}>
          <div>
            <TextField
              id="suUsername"
              hintText="username"
              floatingLabelText="username"
              onChange={this.updateInputValue}
            /><br />
            <TextField
              id="suEmail"
              hintText="email"
              floatingLabelText="email"
              onChange={this.updateInputValue}
            /><br />
            <TextField
              id="suPassword"
              hintText="password"
              floatingLabelText="password"
              floatingLabelStyle={styles.gray}
              floatingLabelFocusStyle={styles.blue}
              errorText="Use at least one lowerase, one numeral, and seven characters."
              errorStyle={this.state.suPasswordErrorStyle}
              onChange={this.onPasswordChange}
            /><br />
            <TextField
              id="suConfirmPassword"
              hintText="confirm password"
              floatingLabelText="confirm password"
              errorText="Passwords don't match."
              errorStyle={this.state.suPassword !== this.state.suConfirmPassword ?
                 this.state.suConfirmPasswordStyle :
                 { display: 'none' }}
              onChange={this.onConfirmPasswordChange}
            /><br />
            <SignUpButton
              suLoading={this.state.suLoading}
              signUpUser={this.signUpUser}
              styles={styles}
            />
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default SignInModal;
