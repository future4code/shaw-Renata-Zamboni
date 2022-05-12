import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { vaiParaLogin } from "../../routes/Coordinator";
import { HeaderBox, HeaderButton } from "./StyledHeader";
import { GlobalContext } from "../../global/GlobalContext";

const Header =(props)=>{
    const navigate = useNavigate()
    const { rightButtonText, setRightButtonText} = useContext(GlobalContext)
    
   

    return(
        <HeaderBox>
            

        </HeaderBox>
    )
}

export default Header;