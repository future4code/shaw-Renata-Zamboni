import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Playlist from './Paginas/Playlist';
import PlaylistTracks from './paginas/PlaylistTracks';
import AddPlaylist from './Paginas/AddPlaylist';
import AddMusica from './Paginas/AddMusica';

      /* case "Playlist":
        return <Playlist mudarTela={mudarTela}/>
      
        case "AddMusica":
        return <AddMusica mudarTela={mudarTela}/>
      
        case "ListaMusica":
        return <PlaylistTracks mudarTela={mudarTela}/>
        
        */

export default class App extends React.Component{

  state={
    telaAtual:"Home"
  }

  mudarTela = (nomeTela)=>{
    this.setState({telaAtual: nomeTela})
  }

  escolherTelaAtual =()=>{

    switch(this.state.telaAtual){
      case "Home":
        return <App mudarTela={mudarTela}/>
      case "AddPlaylist": 
        return <AddPlaylist mudarTela={mudarTela}/>
      default:
        return <App mudarTela={mudarTela}/>
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