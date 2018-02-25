// @flow
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

type State = {
  value: string,
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
};

class SignInModal extends Component<{}, State> {
  state = {
    value: 'a',
  };

  handleChange = (value: string) => {
    this.setState({ value });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
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
            /><br />
            <TextField
              hintText="email"
              floatingLabelText="email"
            /><br />
            <TextField
              hintText="password"
              floatingLabelText="password"
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
