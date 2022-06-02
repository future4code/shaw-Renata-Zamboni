import React from "react";

import {useNavigate} from "react-router-dom";
import { vaiParaCadastro } from "../../routes/Coordinator";

import { Input, Logo, RoundButton, RoundWhiteButton, Tela, Titulo } from "../../global/GlobalStyles";
import ReLogo from "../../assets/RêEddit_Logo.jpg";
import { LogoTitulo, RoundButtonPosition, Subtitulo } from "./StyledLogin";

import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from "./LoginForm";

export default function Login() {
  useUnprotectedPage()
  const navigate = useNavigate()

  return (
    <Tela>
      <div>      
        <Logo src={ReLogo}/>
        <h1>RêEddit</h1>
        <h3>O Fórum</h3>     
      </div>

      <LoginForm/>     
      <br/><br/>

      <button onClick={()=>vaiParaCadastro(navigate)}>
        Crie uma conta!
      </button>
        
    </Tela>
  );
}