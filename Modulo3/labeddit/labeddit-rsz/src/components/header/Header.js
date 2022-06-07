import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vaiParaLogin } from "../../routes/Coordinator";
import { HeaderBox, HeaderButton } from "./StyledHeader";
import { GlobalContext } from "../../global/GlobalContext";

const Header =(props)=>{

    const {token, rightButtonText, setRightButtonText, logout} = useContext(GlobalContext)     
    const navigate = useNavigate()
   

    const rightButtonAction = ()=>{
        if(token){
            logout()
            setRightButtonText("Entrar")
            vaiParaLogin(navigate)
        }else{
            vaiParaLogin(navigate)
        }
    }  

    return(
        <HeaderBox>
            <HeaderButton onClick={rightButtonAction}>{rightButtonText}</HeaderButton>        
        </HeaderBox>
    )
}

export default Header;