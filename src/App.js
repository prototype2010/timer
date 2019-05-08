import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import TaskDetailsContainer from './components/containers/TaskDetailsContainer';
import { REDUX_ACTION_NAMES, ROUTER_PREFIXES } from './config';
import TasksApplicationContainer from './components/containers/TasksApplicationContainer';
import './App.css';

const { TABLE, TASK, CHART } = ROUTER_PREFIXES;
const {
  CHECK_SERIALIZED_STATE,
  DELETE_TASK,
  GENERATE_TASKS,
} = REDUX_ACTION_NAMES;

class App extends React.Component {
  state = {
    showDeleteTaskAlert: false,
  };

  componentDidMount() {
    this.props.recoverState();
  }

  render() {
    const { tasks } = this.props;

    return (
      <div>
        <Switch>
          <Route
            exact
            path={`/${TASK}/:id`}
            render={props => (
              <TaskDetailsContainer id={+props.match.params.id} tasks={tasks} />
            )}
          />
          <Route
            path={[`/${CHART}`, TABLE]}
            render={props => <TasksApplicationContainer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasksList.tasks,
    router: state.router,
  }),
  dispatch => ({
    recoverState: () =>
      dispatch({
        type: CHECK_SERIALIZED_STATE,
      }),
    deleteTask: taskId =>
      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      }),
    generateTasks: () =>
      dispatch({
        type: GENERATE_TASKS,
      }),
  }),
)(App);
