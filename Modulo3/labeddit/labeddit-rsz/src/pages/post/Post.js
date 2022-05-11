import React from "react";

import { useNavigate } from "react-router-dom";

import { Header, Tela2 } from "../../global/GlobalStyles";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { GlobalContext } from "../../global/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function Post() {
  
  useProtectedPage()
  const navigate = useNavigate()
  
  return (
    <div className="Tela2">
      <Header>
        {/* Vai para feed */}
        <button onClick={()=>vaiParaFeed(navigate)}>X</button>
        {/* Vai para login */}
        <button onClick={()=>vaiParaLogin(navigate)}>Logout</button>
      </Header>

      {/* <cardPost/> */}
     
      {/* lista de comentarios do post: endpoint get post coments */}

    </div>
  );
}