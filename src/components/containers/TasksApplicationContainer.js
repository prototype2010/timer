import React, { Component } from 'react';
import Timer from '../Timer';
import NavTabs from '../NavTabs';

export default class TasksApplicationContainer extends Component {
  render() {
    const { match } = this.props;

    return (
      <>
        <Timer />
        <NavTabs url={match} />
      </>
    );
  }
}
