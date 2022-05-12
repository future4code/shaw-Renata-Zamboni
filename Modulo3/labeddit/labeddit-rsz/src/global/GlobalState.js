import { GlobalContext } from "./GlobalContext";
import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { vaiParaLogin } from "../routes/Coordinator";

export const GlobalState = (props) =>{
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText]=useState(token? "Sair": "Entrar")

    const logout=()=>{
        localStorage.removeItem("token")
    }

    const rightButtonAction=()=>{
        if(token){
            logout()
            setRightButtonText("Entrar")
            vaiParaLogin(navigate)
        }else{
            vaiParaLogin(navigate)
        }
    }    
    
    return(
        <GlobalContext.Provider value={{rightButtonText, setRightButtonText}}>

            <BrowserRouter>
                {/* <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
                <HeaderButton onClick={rightButtonAction}>{rightButtonText}</HeaderButton> */}
            </BrowserRouter>

            {props.children}
            
        </GlobalContext.Provider>
    )

}