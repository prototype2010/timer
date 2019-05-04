import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom";
import Timer from './components/Timer';
import TasksTable from './components/TasksTable';
import TaskDetails from './components/TaskDetails';
import NavTabs from './components/NavTabs';
import Chart from './components/Chart';
import {REDUX_ACTION_NAMES, ROUTER_PREFIXES} from './config';

const {TABLE, TASK, CHART} = ROUTER_PREFIXES;
const {CHECK_SERIALIZED_STATE, DELETE_TASK, GENERATE_TASKS} = REDUX_ACTION_NAMES;

class App extends React.Component {

    state = {
        showDeleteTaskAlert: false
    };

    componentDidMount() {
        this.props.recoverState();
    }

    render() {

        const {tasksList, deleteTask} = this.props;

        return (
            <div>
                <Timer/>

                <NavTabs/>

                <Switch>
                    <Route
                        path={TABLE}
                        exact
                        render={props => <TasksTable {...props} deleteTask={deleteTask} tasks={tasksList}/>}
                    />
                    <Route
                        path={`/${TASK}/:id`}
                        render={props => <TaskDetails {...props} tasks={tasksList}/>}
                    />
                    <Route
                        path={`/${CHART}`}
                        render={() => <Chart tasks={tasksList}/>}
                    />
                </Switch>
            </div>

        )
    }
}

export default connect(
    state => ({
        tasksList: state.tasks.tasksList,
        router: state.router
    }),
    dispatch => ({
        recoverState: () => dispatch({
            type: CHECK_SERIALIZED_STATE
        }),
        deleteTask: taskId => dispatch({
            type: DELETE_TASK,
            payload: taskId
        }),
        generateTasks: () => dispatch({
            type: GENERATE_TASKS
        })
    })
)(App)