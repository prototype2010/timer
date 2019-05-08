import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { COLORS_PRESET } from '../config';
import BasicButton from './BasicButton';
import { formChartBars, groupTasksForChart } from '../utils/groupTasksForChart';
import { generateTasks } from '../store/actions';

class Chart extends PureComponent {
  formBarsArray = maximumTaskId => {
    const barsArray = [];

    for (let i = 0; i <= maximumTaskId; i++) {
      barsArray.push(
        <Bar key={i} dataKey={i} stackId='a' fill={COLORS_PRESET[i]} />,
      );
    }

    return barsArray;
  };

  render() {
    const { tasks, generateTasks } = this.props;

    /* taskMaximumId used to color tabs with random colors*/
    const taskMaximumId = Math.max.apply(null, tasks.map(({ id }) => id));
    const barsArray = this.formBarsArray(taskMaximumId);
    const groupedTasks = groupTasksForChart(tasks);
    const chartBars = formChartBars(groupedTasks);

    return (
      <>
        <ResponsiveContainer width={'100%'} height={400}>
          <BarChart
            align={'center'}
            data={chartBars}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis type='number' domain={[60, 60]} />
            <Tooltip />
            <Legend />

            {barsArray}
          </BarChart>
        </ResponsiveContainer>
        <ButtonContainer>
          <BasicButton style={{ align: 'center' }} onClick={generateTasks}>
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
  dispatch => bindActionCreators({ generateTasks }, dispatch),
)(Chart);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
