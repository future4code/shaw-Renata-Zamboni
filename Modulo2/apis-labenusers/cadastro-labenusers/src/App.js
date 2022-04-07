import React from "react";
import {CadastroUsuario} from "./components/CadastroUsuario";
import {ListaUsuario} from "./components/ListaUsuario";

export default class App extends React.Component{
  
  state={
    telaAtual: "cadastro"

  }
  
  render(){
    
    return(
      <div>

        <h1>Sistema de Cadastro Labenusers</h1>
        <CadastroUsuario/>     
        
       

      </div>
    );
  }
  
}




