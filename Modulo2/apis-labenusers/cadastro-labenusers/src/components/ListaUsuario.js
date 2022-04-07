import React from "react";
import axios from "axios";

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
    //obviamente era mais simples do que eu tava tentando >.<
    const headers={
      headers: {
        Authorization: "renata-seabra-zamboni-shaw"
      }
    }
    axios.delete(url, headers)
    .then((resposta)=>{
      alert("Usuário apagado com sucesso!")
      this.mostraUsuario() 

    })
    .catch((err)=>{
      alert("Erro. Tente novamente.")

    })

    //preciso rever melhor todo esse processo de apagar

  }
 
    
  render(){

    const listaUsuarios= this.state.usuarios.map((user)=>{
      return(
        <div key={user.id}>
          {user.name}
          <button onClick={()=>this.apagarUsuario(user.id)}>Excluir Usuário</button>
        </div>        

      )
        
    }) //ainda não entendi pq essa const+botão ficou aqui e não no retunr debaixo de uma vez...
    //...pra depois ser chamado assim {listaUsuarios}  de novo. 
      
    return(
      <div>
        <h2>Lista de Usuários</h2>
        
        {listaUsuarios}       
  
        <button onClick={this.props.irParaCadastro}>Voltar</button>
  
      </div>
    ); 
      
       
   
  }
  
}