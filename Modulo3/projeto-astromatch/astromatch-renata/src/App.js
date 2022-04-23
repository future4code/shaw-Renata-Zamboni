import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";
import { TelaInicial} from "./pages/TelaInicial";
import { ListaMatch } from "./pages/ListaMatch";
import { Header } from "./components/Header";
import { CardPerfil } from "./components/CardPerfil";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const BotaoHome = styled.div`
`

const BotaoLista = styled.div`
`


export default class App extends React.Component {

  state={
    telaAtual:"tela inicial"
  }

  mostraTela = (telaAtual) => {
    this.setState({telaAtual: telaAtual})
  }

  render(){

    const mudaTela = () => {
      if (this.state.telaAtual === "tela inicial") {
        return <TelaInicial/>
      } else if (this.state.telaAtual === "lista match") {
        return <ListaMatch/>
      }
    }  

    return(

      <AppContainer>      

        <Header
          mostraTela={this.mostraTela}
        />

        {mudaTela()}

      </AppContainer>

    );
  }

}
