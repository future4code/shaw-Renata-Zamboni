import React from "react";

import { useNavigate } from "react-router-dom";

import { Tela, Tela2 } from "../../global/GlobalStyles";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { GlobalContext } from "../../global/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { HeaderButton } from "../../components/header/StyledHeader";
import Header from "../../components/header/Header";

const Post=(props)=> {  
  useProtectedPage()
  const navigate = useNavigate()
  
  return (
    <Tela>

      <Header/>
      <button onClick={()=>vaiParaFeed(navigate)}>X</button>

      {/* <cardPost/> */}
     
      {/* lista de comentarios do post: endpoint get post coments */}

    </Tela>
  );
}
export default Post;