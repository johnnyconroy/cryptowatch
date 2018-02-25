// @flow
import React, { Component } from 'react';
import Timeline from './Timeline';
import Navbar from './Navbar';
import { jsonToRecharts } from '../../rechartsUtils/dataConversion';

type AppUIProps = {
  timelineLoading: boolean,
  timelineData: Array<Object>,
  startFetchTimelineData: Function,
  setTimelineData: Function
}

// For dev environment
const prefixURL = window.location.hostname === 'localhost' ?
  'http://localhost:4000/' :
  '';
const url = `${prefixURL}api/timeline`;

class AppUI extends Component<AppUIProps> {
  componentDidMount() {
    this.props.startFetchTimelineData();
    fetch(url)
      .then(response => response.json())
      .then(response => jsonToRecharts(response))
      .then((data) => {
        this.props.setTimelineData(data);
      });
  }

  render() {
    const { timelineLoading, timelineData } = this.props;
    return (
      <div className="App">
        <Navbar />
        <Timeline timelineLoading={timelineLoading} timelineData={timelineData} />
      </div>
    );
  }
}

export default AppUI;
