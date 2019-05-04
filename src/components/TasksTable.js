import React, {Component} from 'react';
import CustomTable from './CustomTable'
import DeleteTaskAlertDialog from './DeleteTaskAlertDialog'

export default class TasksTable extends Component {

    state = {
        showDeleteTaskAlert: false,
        taskToDeleteId : null
    };

    showAlert = () => {
        this.setState({showDeleteTaskAlert: true})
    };

    hideAlert = () => {
        this.setState({showDeleteTaskAlert: false   })
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