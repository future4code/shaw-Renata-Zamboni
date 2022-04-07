import React from "react";
import CadastroUsuario from "./components/CadastroUsuario";
import ListaUsuario from "./components/ListaUsuario";

export default class App extends React.Component{
  
  state={
    telaAtual: "cadastro"

  }

  mudarTela= ()=>{
    switch(this.state.telaAtual){
      case "cadastro":
        return <CadastroUsuario paginaCadastro={this.irParaCadastro}/>
        case "lista":
        return <ListaUsuario paginaLista={this.irParaLista}/>
        default:
          return <p>Erro!</p>
    }
  }

  irParaCadastro =()=>{
    this.setState({telaAtual:"cadastro"})

  }

  irParaLista=()=>{
    this.setState({telaAtual:"lista"})

  }

  //O.O socorro toda esse sequencia para mudar de tela. no html esse recurso era mto mais simples. >.<
  
  render(){
    
    return(
      <div>

        <h1>Sistema de Cadastro Labenusers</h1>
        <CadastroUsuario/> 

        <button onClick={this.props.paginaCadastro}>Voltar</button>   
        
       

      </div>
    );
  }
  
}




