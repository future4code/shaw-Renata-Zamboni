import React from "react";
import axios from "axios";
import styled from 'styled-components';



export default class AddPlaylist extends React.Component{

    state={
        telaAtual:"AddPlaylist"
    }
    
    mudarTela = (nomeTela)=>{
        this.setState({telaAtual: nomeTela})
    }
    
    escolherTelaAtual =()=>{
    
        switch(this.state.telaAtual){
            case "AddPlaylist": 
                return <AddPlaylist mudarTela={mudarTela}/>
            case "Home":
                return <App mudarTela={mudarTela}/>
            default:
                return <AddPlaylist mudarTela={mudarTela}/>
        }
    }
    
    
        
    
    render(){
  
  
      return (
  
        <div>
            {this.escolherTelaAtual()}
         
        </div>
  
      );
  
  
    }
    
  }