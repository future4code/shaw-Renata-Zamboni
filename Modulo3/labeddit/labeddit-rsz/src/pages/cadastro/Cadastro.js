import React from "react";
import { Tela, Titulo } from "../../global/GlobalStyles";

import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

export default function Cadastro() {

  return (
    <Tela>
       <Titulo>Boas vindas ao RêEddit SZ</Titulo>
        
      <input type="text" placeholder="Nome de Usuário"/>
      <input type="text" placeholder="E-mail"/>
      <input type="password" placeholder="Senha"/>

      {/* Vai para Feed */}
      <RoundButton>
          Cadastrar
      </RoundButton>
      
    </Tela>
  );
}