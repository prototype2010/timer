import React, {Component} from 'react';
import {connect} from "react-redux";
import TaskDetails from '../TaskDetails';

class TaskDetailsContainer extends Component {

    render() {
        return (
            <TaskDetails id={this.props.id} tasks={this.props.tasks}/>
        );
    }
}

export default connect(
    state => ({
        tasks: state.tasksList.tasks,
    })
)(TaskDetailsContainer)