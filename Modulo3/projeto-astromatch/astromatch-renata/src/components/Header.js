import React from "react";
import styled from 'styled-components';


const HeaderContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  
`

export const Header = (props) => {
    return (

        <HeaderContainer>
            <img src="src\assets\logo.png"/>            
        </HeaderContainer>
    )
}