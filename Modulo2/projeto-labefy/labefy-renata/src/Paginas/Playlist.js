import React from "react";
import axios from "axios";
import styled from 'styled-components';
import PlaylistTracks from './paginas/PlaylistTracks';


export default class Playlist extends React.Component{
  
  state={
    playlist:[],
  }

  componentDidMount(){
    this.mostraLista()    
  }

  mostraLista=()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const headers={
      Authorization: "renata-seabra-zamboni-shaw"
    }

    axios.get(url,headers).then((resposta)=>{
      this.setState({playlist: resposta.data})
    }).catch((err)=>{
      alert(err.resposta.data.message)

    })

  }

  apagaLista=(id)=>{
    const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"
    const headers={
        Authorization: "renata-seabra-zamboni-shaw"
    }
    axios.delete(url,headers)
    .then((resposta)=>{
      alert("Playlist excluida.")
      this.mostraLista()

    }).catch((err)=>{
      alert ("Sua playlist não quer ir embora!")
      (err.resposta.data.message)
    })
  }

  state={
    telaAtual:"Playlist"
  }


detalhePlaylist =(id)=>{
  const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
  const headers={
    Authorization: "renata-seabra-zamboni-shaw"
  }

  axios.get(url,headers)
  .then((resposta)=>{
      alert(resposta.data.message)

  }).catch((error)=>{
      alert("Deu algo errado aqui. :(")
      (err.resposta.data.message)
  })
}

    
    
    render(){

      const listaDePlaylists=this.state.playlist.map((list)=>{
        return(
          <div key={list.id}>
            {list.name}

            <button onClick={()=>this.apagaLista(list.id)}>X</button>
            
            <button onClick={()=> this.detalhePlaylist(list.id)}>DETALHES DA PLAYLIST</button>

          </div>
        )
      })
  
  
      return(
  
        <div>
          <h2>PLAYLIST</h2>
          <PlaylistTracks/>
          {listaDePlaylists}
         
        </div>
  
      );
  
  
    }
    
  }