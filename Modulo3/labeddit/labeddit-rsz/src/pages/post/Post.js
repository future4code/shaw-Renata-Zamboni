import React from "react";

import { useNavigate } from "react-router-dom";

import { Header, Tela2 } from "../../global/GlobalStyles";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { GlobalContext } from "../../global/GlobalContext";

export default function Post() {

  const navigate = useNavigate()
  return (
    <Tela2>
      <Header>
        {/* Vai para feed */}
        <button onClick={()=>vaiParaFeed(navigate)}>X</button>
        {/* Vai para login */}
        <button onClick={()=>vaiParaLogin(navigate)}>Logout</button>
      </Header>

      {/* input comentario */}

      {/* lista de comentarios do post */}


      {/* Soma ao numero de comentarios */}
      {/* SquareButton */}
      <button>
        Responder
      </button>     
    </Tela2>
  );
}