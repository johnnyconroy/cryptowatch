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
    loading: boolean,
    errors: Object,
  },
  signUp: {
    user: {
      username: string,
      email: string,
      password: string,
      confirmPassword: string,
    },
    loading: boolean,
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

  onSubmitLogin = (event: Object) => {
    const { login } = this.state;
    login.loading = true;
    console.log(login);
    this.setState({ login });

    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(login.user.email);
    const password = encodeURIComponent(login.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:4000/api/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        login.errors = {};
        login.loading = false;
        this.setState({ login });

        console.log('The form is valid');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;
        login.errors = errors;
        login.loading = false;
        this.setState({ login });
      }
    });
    xhr.send(formData);
  }

  onSubmitSignUp = (event: Object) => {
    const { signUp } = this.state;
    signUp.loading = true;
    console.log(signUp);
    this.setState({ signUp });

    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const username = encodeURIComponent(signUp.user.username);
    const email = encodeURIComponent(signUp.user.email);
    const password = encodeURIComponent(signUp.user.password);
    const formData = `username=${username}&email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:4000/api/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        signUp.errors = {};
        signUp.loading = false;
        this.setState({ signUp });

        console.log('The form is valid');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        signUp.errors = errors;
        signUp.loading = false;
        this.setState({ signUp });
      }
    });
    xhr.send(formData);
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
            login={this.state.login}
          />
        </Tab>
        <Tab label="Sign-Up" value="b" style={styles.tab}>
          <SignUpForm
            onChange={this.onChangeSignUp}
            onSubmit={this.onSubmitSignUp}
            signUp={this.state.signUp}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default AuthModal;
