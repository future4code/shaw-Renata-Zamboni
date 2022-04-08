import React from "react";
import axios from "axios";

//1. recebe dados do input, nome e email: utilizar a requisição de criar o usuário da API.  post createUser 
//2. botão enviar responde com alert de sucesso ou erro


export default class CadastroUsuario extends React.Component{

  state={
    nome:"",
    email:""
  }

  //definir os eventos

  onChangeNome = (event) => {
    this.setState({nome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  criarUsuario=()=>{
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body={
      name: this.state.nome,
      email:this.state.email
    }
    const headers={
      headers: {
        Authorization: "renata-seabra-zamboni-shaw"
      }
    }
    //colocando todos os parametros pedidos pela API numa função só
    //= função seguida das suas condições/parametros

    axios.post(url,body,headers)
    .then((resposta)=>{
      alert("Usuário Cadastrado com sucesso.")
      this.setState({nome:"", email:""}) //limpar input após cadastro

    })
    .catch((err)=>{
      alert(err.response.data.message)

    })

    //axios tem uma sintaxe e pontuação bem maldita
    //fica dentro da função criada
    //then e catch é tipo um if-else
  }
 
  render(){
    
    return(
      <div>
        
        <h2>Dados cadastrais</h2>

                
        <lable>Nome: </lable>
        <input placeholder="Digite seu nome" type="text" onChange={this.onChangeNome} value={this.state.name}/>
        <br/>


        <lable>E-mail: </lable>
        <input placeholder="Digite seu e-mail" type="email" onChange={this.onChangeEmail} value={this.state.email}/><br/>

        <br/><button onClick={this.criarUsuario}>Criar Usuário</button>        


      </div>
    );
  }
   
}