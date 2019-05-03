import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Link, Route} from "react-router-dom";
import {STYLES, ROUTER_PREFIXES} from "../config";
import {go,replace,push,LOCATION_CHANGE} from 'react-router-redux'
const {CHART, TABLE} = ROUTER_PREFIXES;
const {TABS_BACKGROUND} = STYLES;

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {

    return <Tab component="div" onClick={event => {


        // console.log()
        // event.preventDefault()
    }

    } {...props} />
        ;
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

function NavTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    console.log(props, "???")

    function handleChange(event, newValue) {
        props.useHistoryApi(replace('/chart'));
        setValue(newValue);
    }

    window.router = props.router;



    return (
        <Route>
            <NoSsr>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                            <LinkTab label={'TASKS LOG'} href={'asd'}>

                            </LinkTab>
                            <LinkTab label={'TASKS CHART'} href={'asd'}>

                            </LinkTab>
                        </Tabs>
                    </AppBar>
                    {/*{value === 0 && <TabContainer>Page One</TabContainer>}*/}
                    {/*{value === 1 && <TabContainer>Page Two</TabContainer>}*/}
                    {/*{value === 2 && <TabContainer>Page Three</TabContainer>}*/}
                </div>
            </NoSsr>
        </Route>
    );
}

export default NavTabs;