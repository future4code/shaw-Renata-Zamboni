import { GlobalContext } from "./GlobalContext";
import React, { useState } from "react";

export const GlobalState = (props) =>{    
    
    return(
        <GlobalContext.Provider value={{}}>
            
            {props.children}
            
        </GlobalContext.Provider>
    )

}