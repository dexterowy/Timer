import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    height: 100vh;
    background: #4F4F4F;
`

const PageWrapper = (props) => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}

export default PageWrapper;