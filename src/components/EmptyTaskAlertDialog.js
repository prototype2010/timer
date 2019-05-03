import React from 'react';
import styled from 'styled-components';
import {STYLES} from '../config'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import DialogButton from "./DialogButton";

const {LIGHT_BLUE, WARN_COLOR} = STYLES;

const DialogTitleContent = styled.p`
    color: ${WARN_COLOR};
    font-weight:  bold;
    font-size: 24px;
`;

export default function (props) {

    return (
        <Dialog open={props.open}>
            <DialogTitle>
                <DialogTitleContent>
                    Empty task name
                </DialogTitleContent>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You are trying close task without name, enter the title and try again
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <DialogButton data={{color: LIGHT_BLUE}} onClick={props.closeAlert}>
                    Close
                </DialogButton>
            </DialogActions>
        </Dialog>
    )
}