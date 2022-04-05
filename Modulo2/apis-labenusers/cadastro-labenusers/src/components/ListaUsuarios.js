import React from "react";
import {CadastroUsuario} from "./components/CadastroUsuario";
import App from "../App";

export class ListaUsuarios extends React.Component{
  
  state={
    id: "",
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