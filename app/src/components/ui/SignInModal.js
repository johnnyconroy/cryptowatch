// @flow
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

type State = {
  value: string,
  SI_username: string,
  SI_password: string,
  SI_loading: string,
  SU_username: string,
  SU_email: string,
  SU_password: string,
  SU_passwordErrorStyle: Object,
  SU_confirmPassword: string,
  SU_loading: string,
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
};

class SignInModal extends Component<{}, State> {
  state = {
    value: 'a',
    SI_username: '',
    SI_password: '',
    SI_loading: '',
    SU_username: '',
    SU_email: '',
    SU_password: '',
    SU_passwordErrorStyle: styles.gray,
    SU_confirmPassword: '',
    SU_loading: '',
  };

  onTabChange = (value: string) => {
    this.setState({ value });
  };

  onPasswordClick = () => {
    const { password } = this.state;
    if (password && password.length > 0) {
      this.setState({ SU_passwordErrorStyle: styles.orange });
    } else {
      this.setState({ SU_passwordErrorStyle: styles.gray });
    }
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.onTabChange}
      >
        <Tab label="Sign-In" value="a" style={styles.tab}>
          <div>
            <TextField
              hintText="email"
              floatingLabelText="email"
            /><br />
            <TextField
              hintText="password"
              floatingLabelText="password"
            /><br />
            <a href="#" style={styles.text}>Forgot your password?</a>
            <RaisedButton label="Submit" primary={true} style={styles.button} />
          </div>
        </Tab>
        <Tab label="Sign-Up" value="b" style={styles.tab}>
          <div>
            <TextField
              hintText="username"
              floatingLabelText="username"
              onClick={() => console.log('click')}
              onChange={() => console.log('change')}
            /><br />
            <TextField
              hintText="email"
              floatingLabelText="email"
            /><br />
            <TextField
              hintText="password"
              floatingLabelText="password"
              floatingLabelStyle={styles.gray}
              floatingLabelFocusStyle={styles.blue}
              errorText="Use at least one lowerase, one numeral, and at least seven characters."
              errorStyle={this.state.SU_passwordErrorStyle}
              onClick={this.onPasswordClick()}
            /><br />
            <TextField
              hintText="confirm password"
              floatingLabelText="confirm password"
            /><br />
            <RaisedButton label="Submit" primary={true} style={styles.button} />
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default SignInModal;
