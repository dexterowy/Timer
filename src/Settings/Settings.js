import React from 'react'
import styled from 'styled-components';


const PrecisionWrapper = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const Settings = (props) => {

    const SettingsWrapper = styled.div`
        /* position: fixed;
        top: 10%;
        left: 10%;
        right: 10%;
        bottom: 10%; */
        /* background: #4c4c4c; */
        height: 100%;
        display: ${props.settingsOpen ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
    `

    const StyledLabel = styled.label`
        margin: 10px;
        font-size: 2em;
        color: #E0E0E0;
        font-family: sans-serif;
        padding: 5px;
    `
    const StyledRadio = styled.input`
        visibility: hidden;
    `


    const selected = {
        backgroundColor: '#E0E0E0',
        color: '#333',
        borderRadius: '5px'
    }

    return (
        <SettingsWrapper>
            <PrecisionWrapper>
                <StyledLabel style={props.settings.precision === 'days' ? selected : {}}>
                    <StyledRadio onChange={props.changePrecision} type='radio' id='days' name='precision' value='days' checked={props.settings.precision === 'days'} />
                    Days
                </StyledLabel>
                <StyledLabel style={props.settings.precision === 'hours' ? selected : {}} >
                    <StyledRadio onChange={props.changePrecision} type='radio' id='hours' name='precision' value='hours' checked={props.settings.precision === 'hours'} />
                    Hours
                </StyledLabel>
                <StyledLabel style={props.settings.precision === 'minutes' ? selected : {}} >
                    <StyledRadio onChange={props.changePrecision} type='radio' id='minutes' name='precision' value='minutes' checked={props.settings.precision === 'minutes'} />
                    Minutes
                </StyledLabel>
                <StyledLabel style={props.settings.precision === 'seconds' ? selected : {}} >
                    <StyledRadio onChange={props.changePrecision} type='radio' id='seconds' name='precision' value='seconds' checked={props.settings.precision === 'seconds'} />
                    Seconds
                </StyledLabel>
            </PrecisionWrapper>
        </SettingsWrapper>
    )
}

export default Settings
