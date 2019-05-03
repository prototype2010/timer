import React from 'react';
import {
    Button,
    withStyles,
} from '@material-ui/core';

export default function (props) {

    const DialogButton = withStyles({
        root: {
            color: props.data.color,
            fontWeight: 'bold'
        },
    })(Button);

    return <DialogButton {...props}/>
}