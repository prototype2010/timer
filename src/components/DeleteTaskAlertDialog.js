import React from 'react';
import styled from 'styled-components';
import {STYLES} from '../config';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import DialogButton from "./DialogButton";

const {LIGHT_BLUE, WARN_COLOR} = STYLES;

export default function (props) {

    const {hideAlert, confirmDeletion, open} = props;

    return (
        <Dialog open={open}>
            <DialogTitle>
                <DialogTitleContent>
                    Delete task
                </DialogTitleContent>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to delete this task ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <DialogButton
                    data={{color: LIGHT_BLUE}}
                    onClick={() => {
                        hideAlert();
                        confirmDeletion();
                    }}>
                    Yes
                </DialogButton>
                <DialogButton
                    data={{color: LIGHT_BLUE}}
                    onClick={hideAlert}>
                    No
                </DialogButton>
            </DialogActions>
        </Dialog>
    );
}

const DialogTitleContent = styled.p`
    color: ${WARN_COLOR};
    font-weight:  bold;
    font-size: 24px;
`;
