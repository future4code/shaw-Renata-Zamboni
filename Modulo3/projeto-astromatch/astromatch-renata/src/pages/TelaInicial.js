import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";
import { CardPerfil } from "../components/CardPerfil";
import { Header } from "../components/Header";

const BotaoLista = styled.div`
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border-radius: 50%;
   
`

export const TelaInicial=(props)=> {

  return (
    <TelaInicial>

      <Header>
        
        <BotaoLista onClick={()=> props.mudaTela("lista match")}>
          <img src="src\assets\busca-home.png"/>
        </BotaoLista>

      </Header>
      
      <CardPerfil/>
      
    </TelaInicial>
  );
}
