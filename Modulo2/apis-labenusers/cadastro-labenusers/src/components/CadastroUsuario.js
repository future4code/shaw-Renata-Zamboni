import React from "react";
import {ListaUsuarios} from "./components/ListaUsuarios";
import App from "../App";

export class CadastroUsuario extends React.Component{
  
  state={
      id: "",
      name: "",
      email:""
    }    

  
  
  render(){
    
    return(
      <div>
        <h2>Cadastro de Usuário</h2>

        <lable>Nome:</lable>
        <input placeholder="Digite seu nome"></input><br/>


        <lable>E-mail:</lable>
        <input placeholder="Digite seu e-mail"></input><br/>

        <br/><button>Criar Usuário</button>

      </div>
    );
  }
  
}