import React from "react";

import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

import { Tela, Titulo } from "../../global/GlobalStyles";

export default function Login() {
  return (
    <Tela>
      <Titulo>RêEddit</Titulo>      
      <Subtitulo>O fórum dos fóruns</Subtitulo>

      <input type="text" placeholder="Nome"/>
      <input type="password" placeholder="Senha"/>

      {/* Vai para Feed */}
      <RoundButton>
          Continuar
      </RoundButton>

      {/* Vai para Cadastro */}
      <RoundButton2>
          Crie uma conta!
      </RoundButton2>    
    </Tela>
  );
}