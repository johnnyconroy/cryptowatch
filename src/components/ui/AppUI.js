import React, { Component } from 'react';
import Timeline from './Timeline';
import { jsonToRecharts } from '../../rechartsUtils/dataConversion';

class AppUI extends Component {
  componentDidMount() {
    this.props.startFetchTimelineData();
    fetch('http://localhost:4000/api/timeline')
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
