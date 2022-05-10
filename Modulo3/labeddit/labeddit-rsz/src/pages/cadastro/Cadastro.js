import React from "react";

import { useNavigate } from "react-router-dom";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { Input, Tela, Titulo } from "../../global/GlobalStyles";

import { GlobalContext } from "../../global/GlobalContext";



export default function Cadastro() {

  const navigate = useNavigate()

  return (
    <Tela>
      {/* Vai para Login */}
      <button onClick={()=> vaiParaLogin(navigate)}>Entrar</button>

      <Titulo>Boas vindas ao RêEddit SZ</Titulo>
        
      <Input type="text" placeholder="Nome de Usuário"/>
      <Input type="text" placeholder="E-mail"/>
      <Input type="password" placeholder="Senha"/>

      {/* Vai para Feed */}
      {/* RoundButton */}
      < button onSubmit={()=>vaiParaFeed(navigate)}>
        Cadastrar
      </button>
      
    </Tela>
  );
}