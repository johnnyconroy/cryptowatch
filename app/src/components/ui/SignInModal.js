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
    margin: 12,
    textTransform: 'none',
  },
  tab: {
    textTransform: 'none',
    fontSize: '20px',
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
            <RaisedButton label="Submit" primary={true} style={styles.button} />
            <RaisedButton label="Close" style={styles.button} />
          </div>
        </Tab>
        <Tab label="Sign-Up" value="b" style={styles.tab}>
          <div>
            <h2>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default SignInModal;
