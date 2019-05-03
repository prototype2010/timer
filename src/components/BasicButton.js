import React from 'react';
import {
    Button,
    withStyles,
} from '@material-ui/core';
import {STYLES} from '../config'

const {TEXT_COLOR} = STYLES;

export default function (props = {}) {

    const {data = {}} = props;

    const BasicButton = withStyles({
        root: {
            borderRadius: 3,
            border: 0,
            color: data.color || TEXT_COLOR,
            height: 48,
            padding: '0 30px',
            margin: '20px 0',
            boxShadow: '0 3px 5px 2px lightgray',
            fontSize: '20px'
        },
        label: {
            textTransform: 'capitalize',
        },
    })(Button);

    return <BasicButton {...props}/>
}