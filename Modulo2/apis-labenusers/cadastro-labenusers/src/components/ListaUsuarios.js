import React from "react";
import App from "../App";

export class ListaUsuarios extends React.Component{
  
  state={
    name: ""
  }
  
  render(){
    
    return(
      <div>
        <h2>Lista de Usuários</h2>

        <button>Excluir Usuário</button>

        <button>Voltar</button>

      </div>
    );
  }
  
}