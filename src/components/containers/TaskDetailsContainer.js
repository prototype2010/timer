import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskDetails from '../TaskDetails';

class TaskDetailsContainer extends Component {
  render() {
    const { id, tasks } = this.props;

    return <TaskDetails id={id} tasks={tasks} />;
  }
}

export default connect(state => ({
  tasks: state.tasksList.tasks
}))(TaskDetailsContainer);
