import React from 'react'
import styled from 'styled-components';

const TimeWrapper = styled.div`
    color: #E0E0E0;
    font-family: sans-serif;
    font-size: 3em;
`



const Time = (props) => {

    const Days = styled.span`
        display: ${props.precision === 'days' ? 'block' : 'none'};
        margin-bottom: 40px;
    `
    const Hours = styled.span`
        display: ${props.precision === 'days' || props.precision === 'hours' ? 'inline' : 'none'};
    `

    const Minutes = styled.span`
        display: ${props.precision === 'days' || props.precision === 'hours' || props.precision === 'minutes' ? 'inline' : 'none'};
    `

    const Seconds = styled.span`

    `

    return (
        <TimeWrapper>
            <Days>
                Days: {props.time.days}
            </Days>
            <Hours>
                {props.time.hours} : 
            </Hours>
            <Minutes>
                {' '+props.time.minutes} : 
            </Minutes>
            <Seconds>
                {' '+props.time.seconds}
            </Seconds>
        </TimeWrapper>
    )
}

export default Time
