import React from "react";

import { useNavigate } from "react-router-dom";
import { vaiParaLogin, vaiParaPost } from "../../routes/Coordinator";

import { Tela2 } from "../../global/GlobalStyles";

import { GlobalContext } from "../../global/GlobalContext";


export default function Feed() {

  const navigate = useNavigate()

  return (
    <Tela2>
      <p>Feed Tá On</p>

      {/* Vai para Login */}
      <button onClick={()=>vaiParaLogin(navigate)}>
        Logout
      </button>


       {/* Adiciona item a lista de posts */}
       {/* SquareButton */}
      <button>
          Postar
      </button>

      <div className="ListaDePost">
          retorna array com a lista de posts
      </div>

      {/* Vai para post */}
      <button onClick={()=>vaiParaPost(navigate)}>Comentario</button>  
    </Tela2>
  );
}