import React from 'react'
import styled from 'styled-components';

import logo from '../img/logo.svg';
import settings from '../img/settings.svg';

const StyledNavbar = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 10px 20px;
    background: #c4c4c4;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLogo = styled.img`
    width: 157px;
    height: 62px;
`

const StyledSettingsIcon = styled.img`
    width: 39px;
    height: 39px;
`

const NavBar = () => {
    return (
        <StyledNavbar>
            <StyledLogo src={logo} />
            <StyledSettingsIcon src={settings} />
        </StyledNavbar>
    )
}

export default NavBar
