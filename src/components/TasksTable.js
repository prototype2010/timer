import React, { Component } from 'react';
import GenericTable from './GenericTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeleteTaskAlertDialog from './DeleteTaskAlertDialog';
import { deleteTask } from '../store/actions';

class TasksTable extends Component {
  state = {
    showDeleteTaskAlert: false,
    taskToDeleteId: null
  };

  showAlert = () => {
    this.setState({ showDeleteTaskAlert: true });
  };

  hideAlert = () => {
    this.setState({ showDeleteTaskAlert: false });
  };

  transferTaskIdToDelete = id => {
    this.setState({ taskToDeleteId: id });
  };

  confirmDeletion = () => {
    this.props.deleteTask(this.state.taskToDeleteId);
  };

  render() {
    const {
      state,
      props,
      hideAlert,
      confirmDeletion,
      transferTaskIdToDelete,
      showAlert
    } = this;
    const { showDeleteTaskAlert } = state;
    const { deleteTask, tasks } = props;

    return (
      <>
        <DeleteTaskAlertDialog
          open={showDeleteTaskAlert}
          hideAlert={hideAlert}
          deleteTask={deleteTask}
          confirmDeletion={confirmDeletion}
        />

        <GenericTable
          items={tasks}
          transferTaskIdToDelete={transferTaskIdToDelete}
          showAlert={showAlert}
        />
      </>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasksList.tasks
  }),
  dispatch => bindActionCreators({ deleteTask }, dispatch)
)(TasksTable);
