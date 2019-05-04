import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'
import {
    Input,
    withStyles
} from '@material-ui/core';
import Clock from './Clock'
import BasicButton from './BasicButton'
import {REDUX_ACTION_NAMES, STYLES} from '../config'
import EmptyTaskAlertDialog from './EmptyTaskAlertDialog';

const {CONTROL_TASKS_FLOW, SET_TASK_NAME} = REDUX_ACTION_NAMES;
const {TEXT_COLOR} = STYLES;

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

class Timer extends Component {

    state = {
        showEmptyTaskAlert: false
    };

    openAlert = () => {
        this.setState({showEmptyTaskAlert: true})
    };

    closeAlert = () => {
        this.setState({showEmptyTaskAlert: false})
    };

    handleTimerButtonClick = () => {

        const {startTime, taskName, controlTasksFlow} = this.props;

        if (startTime && !taskName) {
            this.openAlert();
        } else {
            controlTasksFlow();
        }
    };

    render() {

        const {startTime, taskName} = this.props;

        return (
            <TimerContainer>

                <TaskNameInput
                    onChange={this.props.handleTaskNameChange}
                    placeholder={'Name of your task'}
                    value={taskName}
                    inputProps={{
                        style: {
                            textAlign: "center",
                        }
                    }}
                />

                <EmptyTaskAlertDialog
                    open={this.state.showEmptyTaskAlert}
                    closeAlert={this.closeAlert}
                />

                <Clock
                    startTime={startTime}
                />

                <BasicButton
                    onClick={this.handleTimerButtonClick}
                >
                    {startTime ? 'STOP' : 'START'}
                </BasicButton>

            </TimerContainer>
        );
    }
}

export default connect(
    state => ({...state.tasks}),
    dispatch => ({
        controlTasksFlow: () => dispatch({
            type: CONTROL_TASKS_FLOW
        }),
        handleTaskNameChange: event => dispatch({
            type: SET_TASK_NAME,
            payload: event.target.value
        })
    })
)(Timer);