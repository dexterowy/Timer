import React from 'react'
import styled from 'styled-components';

import Time from '../Time/Time';





const Timer = (props) => {

    const TimerWrapper = styled.div `
        height: 100%;
        display: ${props.settingsOpen ? 'none' : 'flex'};
        justify-content: center;
        align-items: center;
    `

    return(
        <TimerWrapper>
            <Time precision={props.precision} time={props.time}></Time>
        </TimerWrapper>
        )
}

export default Timer
