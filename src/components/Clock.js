import React, {PureComponent} from 'react';
import styled from "styled-components";
import {getFormattedDifference} from '../utils/timeFormatter';

const DEFAULT_DISPLAY_TIME = '00:00:00';

export default class Clock extends PureComponent {

    state = {
        timeToDisplay: DEFAULT_DISPLAY_TIME
    };
    launchTimer = () => {
        this.timer = setInterval(this.updateStateTime, 1000)
    };
    destroyTimer = () => {
        this.setState({timeToDisplay: DEFAULT_DISPLAY_TIME}, () => {
            clearInterval(this.timer);
        })
    };
    updateStateTime = () => {
        this.setState({
            timeToDisplay: getFormattedDifference(this.props.startTime)
        });
    };

    componentWillReceiveProps(nextProps, nextContext) {

        const {startTime} = this.props;

        if (!startTime && nextProps.startTime) {
            this.launchTimer();
        } else if (startTime && !nextProps.startTime) {
            this.destroyTimer();
        }
    }

    componentWillUnmount() {
        this.destroyTimer();
    }

    render() {

        const {timeToDisplay} = this.state;

        return (
            <ClockRoundBlock>
                <TimeOutputWrapper>
                    {timeToDisplay}
                </TimeOutputWrapper>
            </ClockRoundBlock>
        );
    }
}

const ClockRoundBlock = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid lightgray;
  margin: 30px;
  border-radius: 50%;
  box-shadow: 0 2px 3px 1px lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeOutputWrapper = styled.span`
  font-size: 36px;
`;