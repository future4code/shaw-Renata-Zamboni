import React from "react";

import { useNavigate } from "react-router-dom";
import { vaiParaLogin, vaiParaPost } from "../../routes/Coordinator";

import { Tela, Tela2 } from "../../global/GlobalStyles";

import { GlobalContext } from "../../global/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { HeaderButton } from "../../components/header/StyledHeader";
import Header from "../../components/header/Header";


const Feed = (props)=> {
  useProtectedPage()
  const navigate = useNavigate()

  return (
    <Tela>

      <Header/>
      {/* <div className="Header">  
        <HeaderButton onClick={()=>vaiParaLogin(navigate)}>Logout</HeaderButton>
      </div> */}

      {/* <cardFeed/> */}

      <div className="ListaDePost">
          {/* endPoint GetPosts ({{baseURL}}/posts) retorna array com a lista de posts */}
      </div>
      
      <button onClick={()=>vaiParaPost(navigate)}>Palpite</button>  
    </Tela>
  );
}

export default Feed;