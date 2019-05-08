import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Input, withStyles } from '@material-ui/core';

import Clock from './Clock';
import BasicButton from './BasicButton';
import { STYLES } from '../config';
import EmptyTaskAlertDialog from './EmptyTaskAlertDialog';
import { controlTasksFlow, handleTaskNameChange } from '../store/actions';

const { TEXT_COLOR } = STYLES;

class Timer extends Component {
  state = {
    showEmptyTaskAlert: false,
    localTaskName: ''
  };
  openAlert = () => {
    this.setState({ showEmptyTaskAlert: true });
  };
  closeAlert = () => {
    this.setState({ showEmptyTaskAlert: false });
  };
  handleTimerButtonClick = () => {
    const { startTime, taskName, controlTasksFlow } = this.props;

    if (startTime && !taskName) {
      this.openAlert();
    } else {
      controlTasksFlow();
    }
  };
  handleInputChange = e => {
    this.setState({ localTaskName: e.target.value }, () => {
      this.props.handleTaskNameChange(this.state.localTaskName);
    });
  };

  componentDidMount() {
    this.setState({ localTaskName: this.props.taskName });
  }

  componentWillReceiveProps(nextProps) {
    const { taskName } = nextProps;

    this.setState({ localTaskName: taskName });
  }

  render() {
    const {
      props,
      state,
      handleTimerButtonClick,
      handleInputChange,
      closeAlert
    } = this;
    const { startTime } = props;
    const { localTaskName, showEmptyTaskAlert } = state;

    return (
      <TimerContainer>
        <TaskNameInput
          onChange={handleInputChange}
          placeholder={'Name of your task'}
          value={localTaskName}
          inputProps={{
            style: {
              textAlign: 'center'
            }
          }}
        />

        <EmptyTaskAlertDialog
          open={showEmptyTaskAlert}
          closeAlert={closeAlert}
        />

        <Clock startTime={startTime} />

        <BasicButton onClick={handleTimerButtonClick}>
          {startTime ? 'STOP' : 'START'}
        </BasicButton>
      </TimerContainer>
    );
  }
}

export default connect(
  ({ currentTask }) => ({
    startTime: currentTask.startTime,
    taskName: currentTask.taskName
  }),
  dispatch =>
    bindActionCreators({ controlTasksFlow, handleTaskNameChange }, dispatch)
)(Timer);

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  align-items: center;
  color: ${TEXT_COLOR};
  padding-top: 30px;
`;

const TaskNameInput = withStyles({
  root: {
    width: '450px',
    fontSize: '20px',
    color: `${TEXT_COLOR}`
  }
})(Input);
