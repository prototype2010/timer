import React, {Component} from 'react';
import Timer from "../Timer";
import NavTabs from "../NavTabs";

export default class TasksApplicationContainer extends Component {
    render() {
        return (
            <>
                <Timer/>
                <NavTabs url={this.props.match}/>
            </>
        );
    }
}