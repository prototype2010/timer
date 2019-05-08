import React, { Component } from 'react';
import styled from 'styled-components';
import TaskCard from './TaskCard';
import PageNotFound from './PageNotFound';

export default class TaskDetails extends Component {
  render() {
    const { id: paramId, tasks } = this.props;
    const requestedTask = tasks.find(({ id }) => id === paramId);

    return (
      <TaskContainer>
        {requestedTask ? (
          <TaskCard requestedTask={requestedTask} />
        ) : (
          <PageNotFound />
        )}
      </TaskContainer>
    );
  }
}

const TaskContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
