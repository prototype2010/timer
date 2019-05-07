import React, {PureComponent} from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {connect} from "react-redux";
import styled from 'styled-components';
import {REDUX_ACTION_NAMES, COLORS_PRESET} from '../config';
import BasicButton from './BasicButton'
const {formChartBars, groupTasksForChart} = require('../utils/groupTasksForChart');

const {GENERATE_TASKS} = REDUX_ACTION_NAMES;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class Chart extends PureComponent {

    formBarsArray = maximumTaskId => {

        const barsArray = [];

        for (let i = 0; i <= maximumTaskId; i++) {
            barsArray.push(<Bar key={i} dataKey={i} stackId="a" fill={COLORS_PRESET[i]}/>)
        }

        return barsArray;
    };

    render() {

        const {tasks, generateTasks} = this.props;
        /* taskMaximumId used to color tabs with random colors*/
        const taskMaximumId = Math.max.apply(null, tasks.map(({id}) => id));
        const barsArray = this.formBarsArray(taskMaximumId);
        const testData = groupTasksForChart(tasks);
        const chartBars = formChartBars(testData);

        return (
            <>
                <BarChart
                    align={'center'}
                    width={document.documentElement.clientWidth * 0.95 || 1000}
                    height={400}
                    data={chartBars}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>

                    {barsArray}

                </BarChart>

                <ButtonContainer>
                    <BasicButton
                        style={{align: 'center'}}
                        onClick={generateTasks}
                    >
                        Generate tasks
                    </BasicButton>
                </ButtonContainer>
            </>
        );
    }
}

export default connect(
    state => ({
        tasks: state.tasksList.tasks,
    }),
    dispatch => ({
        generateTasks: () => dispatch({
            type: GENERATE_TASKS
        })
    })
)(Chart)