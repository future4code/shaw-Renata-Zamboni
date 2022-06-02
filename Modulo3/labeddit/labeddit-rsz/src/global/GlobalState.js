import { GlobalContext } from "./GlobalContext";
import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { vaiParaLogin } from "../routes/Coordinator";

export const GlobalState = (props) =>{

    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText]=useState(token? "Sair": "Entrar")
    
    const logout=()=>{
        localStorage.removeItem("token")
    }   
  
        
    return(
        <GlobalContext.Provider value={{token, rightButtonText, setRightButtonText, logout}}>
            
            {props.children}
            
        </GlobalContext.Provider>
    )
}