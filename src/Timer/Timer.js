import React, {Component} from 'react'
import styled from 'styled-components';

const TimerWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Time = styled.span`
    color: #E0E0E0;
    font-family: sans-serif;
    font-size: 3em;
`





class Timer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            comeback: new Date(2019, 7, 31, 23, 31).getTime(),
            diff: {
                hours: '00',
                minutes: '00',
                seconds: '00'
            }
        }
    }
    

    checkTime() {
        let timeNow = new Date();
        // console.log('time now', timeNow.getTime());
        // console.log('comeback', comeback.getTime());
        let diff = parseInt((this.state.comeback - timeNow) / 1000);
        let hours = parseInt(diff / 3600);
        let minutes = parseInt((diff - 3600 * hours) / 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes
        let seconds = parseInt(diff - hours * 3600 - minutes * 60)
        seconds = seconds < 10 ? `0${seconds}` : seconds

        // console.log(hours, minutes, seconds);
        this.setState( {
            diff: {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        })
    }

    componentDidMount() {
        // const comeback = new Date(2019, 7, 31, 23, 31);
        setInterval(this.checkTime.bind(this), 1000);

    }

    render() {
        return (
             <TimerWrapper>
                <Time>{this.state.diff.hours} : {this.state.diff.minutes} : {this.state.diff.seconds}</Time>
            </TimerWrapper>
        )
    }
}

export default Timer
