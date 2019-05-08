import React from 'react';
import { Button, withStyles } from '@material-ui/core';

export default function(props) {
  const { data } = props;

  const DialogButton = withStyles({
    root: {
      color: data.color,
      fontWeight: 'bold',
    },
  })(Button);

  return <DialogButton {...props} />;
}
