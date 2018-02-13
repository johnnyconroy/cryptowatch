import React, { Component } from 'react';
import Timeline from './Timeline';
import { jsonToRecharts } from '../../rechartsUtils/dataConversion';

const prefixUrl = window.location.host.includes('localhost') ?
  'http://localhost:4000/' :
  '';
const timelineUrl = `${prefixUrl}api/timeline`;

class AppUI extends Component {
  componentDidMount() {
    this.props.startFetchTimelineData();
    fetch(timelineUrl)
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
        <Timeline timelineLoading={timelineLoading} timelineData={timelineData} />
      </div>
    );
  }
}

export default AppUI;
