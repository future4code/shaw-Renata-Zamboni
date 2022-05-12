import React from "react";

import { useNavigate } from "react-router-dom";

import { Tela2 } from "../../global/GlobalStyles";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { GlobalContext } from "../../global/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { HeaderButton } from "../../components/header/StyledHeader";

export default function Post() {
  
  useProtectedPage()
  const navigate = useNavigate()
  
  return (
    <div className="Tela2">
      <div className="Header">
        {/* Vai para feed */}
        <button onClick={()=>vaiParaFeed(navigate)}>X</button>
        {/* Vai para login */}
        <HeaderButton onClick={()=>vaiParaLogin(navigate)}>Logout</HeaderButton>
      </div>

      {/* <cardPost/> */}
     
      {/* lista de comentarios do post: endpoint get post coments */}

    </div>
  );
}