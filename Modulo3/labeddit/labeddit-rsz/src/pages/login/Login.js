import React from "react";

import { GlobalContext } from "../../global/GlobalContext";

import {useNavigate, useParams} from "react-router-dom";


import { Input, Logo, RoundButton, RoundWhiteButton, Tela, Titulo } from "../../global/GlobalStyles";
import ReLogo from "../../assets/RêEddit_Logo.jpg"
import { LogoTitulo, RoundButtonPosition, Subtitulo } from "./StyledLogin";
import { vaiParaCadastro, vaiParaFeed } from "../../routes/Coordinator";

export default function Login() {

  const navigate = useNavigate();

  return (
    <Tela>
      <LogoTitulo>
        <Logo src={ReLogo}/>
        <Titulo>RêEddit</Titulo>
      </LogoTitulo>      
      <Subtitulo>O fórum dos fóruns</Subtitulo>

      <Input type="text" placeholder="Nome"/>
      <Input type="password" placeholder="Senha"/>

      {/* Vai para Feed */}
      <RoundButtonPosition>
        <RoundButton onClick={()=> vaiParaFeed(navigate)}>
          Continuar
        </RoundButton>
      </RoundButtonPosition>

      {/* Vai para Cadastro */}
      <RoundWhiteButton onClick={()=>vaiParaCadastro(navigate)}>
          Crie uma conta!
      </RoundWhiteButton>    
    </Tela>
  );
}