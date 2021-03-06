import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { ROUTER_PREFIXES } from '../config';
import { getFormattedDifference, formatDate } from '../utils/timeFormatter';

const { TABLE } = ROUTER_PREFIXES;

function SimpleCard(props) {
  const { classes, requestedTask } = props;
  const { card, title } = classes;
  const { endTime, id, startTime, taskName } = requestedTask;

  return (
    <Card className={card}>
      <CardContent>
        <Typography className={title} color='textSecondary' gutterBottom>
          TASK # {`${id}`}
        </Typography>
        <Typography variant='h5' component='h2'>
          Task name : {taskName}
        </Typography>
        <Typography variant='h5' component='h2'>
          Start time : {formatDate(startTime)}
        </Typography>
        <Typography variant='h5' component='h2'>
          End time : {formatDate(endTime)}
        </Typography>
        <Typography variant='h5' component='h2'>
          Spent time : {getFormattedDifference(startTime, endTime)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={TABLE}>
          <Button size='small'>Back to task list</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 600
  },
  bullet: {
    display: 'inline-block',
    margin: '0 4px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

export default withStyles(styles)(SimpleCard);
