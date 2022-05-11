import React from "react";

import { useNavigate } from "react-router-dom";
import { vaiParaLogin, vaiParaPost } from "../../routes/Coordinator";

import { Header, Tela2 } from "../../global/GlobalStyles";

import { GlobalContext } from "../../global/GlobalContext";


export default function Feed() {

  const navigate = useNavigate()

  return (
    <div className="Tela2">
      <Header>  
        <button onClick={()=>vaiParaLogin(navigate)}>Logout</button>
      </Header>

      {/* <cardFeed/> */}

      <div className="ListaDePost">
          {/* endPoint GetPosts ({{baseURL}}/posts) retorna array com a lista de posts */}
      </div>
      
      <button onClick={()=>vaiParaPost(navigate)}>Pitaco</button>  
    </div>
  );
}