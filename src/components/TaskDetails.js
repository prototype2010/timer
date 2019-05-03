import React, {Component} from 'react';
import TaskCard from './TaskCard'
import PageNotFound from './PageNotFound'

export default class TaskDetails extends Component {

    render() {

        const {match, tasks} = this.props;
        const {id: urlId} = match.params;
        const requestedTask = tasks.find(({id}) => id === +urlId);

        return (
            <div>
                {requestedTask ?
                    <TaskCard requestedTask={requestedTask}/>
                    : <PageNotFound/>
                }
            </div>
        );
    }
}