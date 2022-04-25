import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Playlist from './paginas/Playlist';
import AddPlaylist from './paginas/AddPlaylist';


export default class App extends React.Component{

  state={
    telaAtual:"Home"
  }


  escolherTelaAtual =()=>{

    switch(this.state.telaAtual){
      case "Home":
        return <App/>
      case "AddPlaylist": 
        return <AddPlaylist/>
      default:
        return <App/>
    }
  }


  
  render(){
   

      
    return (      

      <div>

        <p>App</p>

        <Playlist/>
        
        <button onClick={()=> this.escolherTelaAtual()}>CRIAR PLAYLIST</button>        
       
      </div>

    );


  }
  
}