// @flow
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import styles from '../../styles/materialStyles';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

type State = {
  value: string,
  login: {
    user: {
      email: string,
      password: string,
    },
    loading: false,
    errors: Object,
  },
  signUp: {
    user: {
      username: string,
      email: string,
      password: string,
      confirmPassword: string,
    },
    loading: false,
    errors: {},
  },
};

class AuthModal extends Component<{}, State> {
  state = {
    value: 'a',
    login: {
      user: {
        email: '',
        password: '',
      },
      loading: false,
      errors: {},
    },
    signUp: {
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      loading: false,
      errors: {},
    },
  };

  onTabChange = (value: string) => {
    this.setState({ value });
  };

  onSubmitLogin = () => {
    const { login } = this.state;
    login.loading = true;
    console.log(login);

    this.setState({ login });
  }

  onSubmitSignUp = () => {
    const { signUp } = this.state;
    signUp.loading = true;
    console.log(signUp);

    this.setState({ signUp });
  }

  onChangeLogin = (event: Object) => {
    const field = event.target.name;
    const { login } = this.state;
    login.user[field] = event.target.value;

    this.setState({ login });
  };

  onChangeSignUp = (event: Object) => {
    const field = event.target.name;
    const { signUp } = this.state;
    signUp.user[field] = event.target.value;

    this.setState({ signUp });
  };

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.onTabChange}>
        <Tab label="Login" value="a" style={styles.tab}>
          <LoginForm
            onChange={this.onChangeLogin}
            onSubmit={this.onSubmitLogin}
          />
        </Tab>
        <Tab label="Sign-Up" value="b" style={styles.tab}>
          <SignUpForm
            onChange={this.onChangeSignUp}
            onSubmit={this.onSubmitSignUp}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default AuthModal;
