import React from "react";
import {CadastroUsuario} from "./CadastroUsuario";
import App from "../App";

export class ListaUsuarios extends React.Component{
  
  state={
    name: ""
  }
    
  render(){
    
    return(
      <div>
        <h2>Lista de Usuários</h2>

        <p>Nome:{this.state.name}</p>

        <button>Excluir Usuário</button>

        <button>Voltar</button>

      </div>
    );
  }
  
}