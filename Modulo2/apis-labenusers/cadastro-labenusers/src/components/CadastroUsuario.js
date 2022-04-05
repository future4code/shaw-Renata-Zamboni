import React from "react";
import App from "../App";

export class CadastroUsuario extends React.Component{
  
  state={
      id: "",
      name: "",
      email:""
    };
    
    onChangeNome = (event) => {
        this.setState({ name: event.target.value});
    };
    
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value});
    };

    onClickCriaUsuario=()=>{
        //tem que retornar um alert e ir pra próxima página
    }

  
  
  render(){
    
    return(
      <div>
        
        <h2>Dados cadastrais</h2>
        
        <lable>Nome: </lable>
        <input placeholder="Digite seu nome" type="text" onChange={this.onChangeNome} value={this.state.name}></input><br/>


        <lable>E-mail: </lable>
        <input placeholder="Digite seu e-mail" type="email" onChange={this.onChangeEmail} value={this.state.email}></input><br/>

        <br/><button>Criar Usuário</button>

      </div>
    );
  }
  
}

