import React, {Component} from 'react';
import CustomTable from './CustomTable'
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

        return (
            <>
                <DeleteTaskAlertDialog
                    open={this.state.showDeleteTaskAlert}
                    hideAlert={this.hideAlert}
                    deleteTask={this.props.deleteTask}
                    confirmDeletion={this.confirmDeletion}
                />

                <CustomTable
                    tasks={this.props.tasks}
                    transferTaskIdToDelete={this.transferTaskIdToDelete}
                    showAlert={this.showAlert}
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