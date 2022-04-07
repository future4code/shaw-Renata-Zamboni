import React from "react";
import axios from "axios";
import {CadastroUsuario} from "./CadastroUsuario";
import App from "../App";

export default class ListaUsuario extends React.Component{

  //mostrar uma lista dos usuários com somente seus nomes. getAllUsers.nome(map)
  //botao deletar com requisição da API - del deleteUser
  //botao voltar - redireciona tela inicial
  
  state={
    usuarios:[],
    nome: "",
    
  };

  //pegar dados e guardar no state:
  componentDidMount(){
    this.mostraUsuario()
  }  

  mostraUsuario=()=>{
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const headers={
      headers: {
        Authorization: "renata-seabra-zamboni-shaw"
      }
    }
    axios.post(url, headers)
    .then((resposta)=>{
      this.setState({usuarios: resposta.data}) 

    })
    .catch((err)=>{
      alert("Erro. Confira os dados e tente novamente.")

    })
  }

  apagarUsuario=(id)=>{
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const headers={
      headers: {
        Authorization: "renata-seabra-zamboni-shaw"
      }
    }
    axios.delete(url, headers)
    .then((resposta)=>{
      this.setState({usuarios: resposta.data}) 

    })
    .catch((err)=>{
      alert("Erro. Confira os dados e tente novamente.")

    })

  }
 
    
  render(){
    const listaUsuarios= this.state.usuarios.map((user)=>{
      return <div key={user.id}>{user.name} <button>Excluir Usuário</button></div>
      
    })
    
    return(
      <div>
        <h2>Lista de Usuários</h2>

        <p>Nome:{listaUsuarios}</p>

        <button>Voltar</button>

      </div>
    );
  }
  
}