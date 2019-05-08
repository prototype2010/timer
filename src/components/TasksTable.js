import React, {Component} from 'react';
import GenericTable from './GenericTable'
import DeleteTaskAlertDialog from './DeleteTaskAlertDialog'
import {connect} from "react-redux";
import {REDUX_ACTION_NAMES} from "../config";

const {DELETE_TASK} = REDUX_ACTION_NAMES;

class TasksTable extends Component {

    state = {
        showDeleteTaskAlert: false,
        taskToDeleteId: null
    };

    showAlert = () => {
        this.setState({showDeleteTaskAlert: true})
    };

    hideAlert = () => {
        this.setState({showDeleteTaskAlert: false})
    };

    transferTaskIdToDelete = id => {
        this.setState({taskToDeleteId: id})
    };

    confirmDeletion = () => {
        this.props.deleteTask(this.state.taskToDeleteId);
    };

    render() {

        const {state, props, hideAlert, confirmDeletion, transferTaskIdToDelete, showAlert} = this;
        const {showDeleteTaskAlert} = state;
        const {deleteTask, tasks} = props;

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
        tasks: state.tasksList.tasks,
    }),
    dispatch => ({
        deleteTask: taskId => dispatch({
            type: DELETE_TASK,
            payload: taskId
        }),
    })
)(TasksTable)