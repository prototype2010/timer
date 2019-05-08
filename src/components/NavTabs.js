import React from 'react';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import {Link, Route} from "react-router-dom";
import {STYLES, ROUTER_PREFIXES} from "../config";
import Chart from '../components/Chart';
import TasksTable from '../components/TasksTable';

const {CHART, TABLE} = ROUTER_PREFIXES;
const {TABS_BACKGROUND} = STYLES;

export default function NavTabs() {

    const {root} = useStyles();
    const [value, setValue] = React.useState(window.location.hash.endsWith(CHART) ? 1 : 0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Route>
            <NoSsr>
                <div className={root}>
                    <AppBar position="static">
                        <Tabs
                            style={{background: TABS_BACKGROUND}}
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}>
                            <LinkTab label={'TASKS LOG'} to={TABLE}/>
                            <LinkTab label={'TASKS CHART'} to={`/${CHART}`} replace={true}/>
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TasksTable/>}
                    {value === 1 && <Chart/>}
                </div>
            </NoSsr>
        </Route>
    );
}

function LinkTab(props) {

    return (
        <Tab
            component={Link}
            {...props}
        />
    );
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));