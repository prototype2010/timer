import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
import {Link} from "react-router-dom";
import {ROUTER_PREFIXES} from '../config';
import {getFormattedDifference, formatDate} from '../utils/timeFormatter';
import BasicButton from './BasicButton'

const {TASK} = ROUTER_PREFIXES;

function CustomizedTable(props) {

    const {classes, items, showAlert, transferTaskIdToDelete} = props;
    const {root, table} = classes;

    return (
        <Paper className={root}>
            <Table className={table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>№</CustomTableCell>
                        <CustomTableCell align="right">Task</CustomTableCell>
                        <CustomTableCell align="right">Time start</CustomTableCell>
                        <CustomTableCell align="right">Time end</CustomTableCell>
                        <CustomTableCell align="right">Time spend</CustomTableCell>
                        <CustomTableCell align="center">Info</CustomTableCell>
                        <CustomTableCell align="center">Delete</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row, i) => {

                        const {taskName, startTime, endTime, id} = row;

                        return (
                            <TableRow className={classes.row} key={id}>
                                <CustomTableCell component="th" scope="row">{i + 1}</CustomTableCell>
                                <CustomTableCell align="right">{taskName}</CustomTableCell>
                                <CustomTableCell align="right">{formatDate(startTime)}</CustomTableCell>
                                <CustomTableCell align="right">{formatDate(endTime)}</CustomTableCell>
                                <CustomTableCell
                                    align="right">{getFormattedDifference(startTime, endTime)}</CustomTableCell>
                                <CustomTableCell align="center">
                                    <Link to={`${TASK}/${id}`}>
                                        <BasicButton size={'small'}>
                                            INFO
                                        </BasicButton>
                                    </Link>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                    <BasicButton
                                        size={'small'}
                                        onClick={() => {
                                            showAlert();
                                            transferTaskIdToDelete(id);
                                        }}>
                                        DELETE
                                    </BasicButton>
                                </CustomTableCell>
                            </TableRow>)
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.gray,
    },
    body: {
        fontSize: 14,
        textDecoration: 'none'
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

export default withStyles(styles)(CustomizedTable);
