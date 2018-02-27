// @flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import LoginModal from './LoginModal';
import '../../styles/navbar.css';

type State = {
  open: boolean,
};

const customContentStyle = {
  width: '350px',
};

class NavBar extends Component<{}, State> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div id="navbar">
        <ul>
          <li>
            <p onClick={this.handleOpen}>Sign in</p>
            <Dialog
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              contentStyle={customContentStyle}
              autoScrollBodyContent={true}
            >
              <LoginModal />
            </Dialog>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
