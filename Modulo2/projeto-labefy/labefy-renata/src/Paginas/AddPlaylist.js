import React from "react";
import axios from "axios";
import styled from 'styled-components';
import App from "../App";




export default class AddPlaylist extends React.Component{

    state={
        telaAtual:"AddPlaylist"
    }
    
      
    escolherTelaAtual =()=>{
    
        switch(this.state.telaAtual){
            case "AddPlaylist": 
                return <AddPlaylist/>
            case "Home":
                return <App/>
            default:
                return <AddPlaylist/>
        }
    }

    state={
        novaPlaylist:""
    }

    onChangeNovaLista =(event)=>{
        this.setState({novaPlaylist: event.target.value})
    }

    adicionaPlaylist = () =>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers={
            Authorization: "renata-seabra-zamboni-shaw"
        }
        const  body={
            name: this.state.novaPlaylist
        }
        
        axios.post(url,headers, body)
        .then((resposta)=>{
            alert("Nova Playlist inserida com sucesso!")
            this.setState({novaPlaylist:""})

        }).catch((error)=>{
            alert(err.resposta.data.message)
        })
        
    }     

        
    
    render(){
  
  
      return (
  
        <div>
            
            <input placeholder="Digite o nome da nova playlist" type="text" onChange={this.onChangeNovaLista} value={this.state.novaPlaylist}/>

            <button onClick={this.adicionaPlaylist}>ADICIONAR NOVA PLAYLIST</button>

            <button onClick={()=> this.escolherTelaAtual()}>VOLTAR</button>    
         
        </div>
  
      );
  
  
    }
    
  }