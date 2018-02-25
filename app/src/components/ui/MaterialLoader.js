// @flow
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import '../../styles/materialLoader.css';

const MaterialLoader = () => (
  <div id="timelineLoader">
    <MuiThemeProvider>
      <CircularProgress />
    </MuiThemeProvider>
  </div>
);

export default MaterialLoader;
