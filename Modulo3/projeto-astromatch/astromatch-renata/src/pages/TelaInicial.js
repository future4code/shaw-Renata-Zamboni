import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";
import { CardPerfil } from "../components/CardPerfil";
import { Header } from "../components/Header";
import {ListaMatch} from '../pages/ListaMatch';


const BotaoLista = styled.div`
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border-radius: 50%;
   
`
const IconeMatch = styled.div`
    width: 30px;
    margin-left: 10px;
    border-radius: 50%;   
`

const IconeDeuRuim = styled.div`
    width: 30px;
    margin-left: 10px;
    border-radius: 50%;
   
`

export const TelaInicial=(props)=> {

  const [like,setLike]=useState(false);

  const [dislike, setDislike]=useState(false);

  const [allMatches, setAllMatches]=useState([]);

  const onClickCurtida = () => {
    if (like) {
      setLike(false);      
    } else {
      setLike(true);      
    }
  };

  const onClickDislike= () => {
    if (dislike) {
      setDislike(false);      
    } else {
      setDislike(true);      
    }
  };

  allMatches.map((match) => {
    const newListOfMatches = [...allMatches, match];
    setAllMatches(newListOfMatches);
    return (      
      <ListaMatch/>      
    );

  });  

  
  return (
    <TelaInicial>

      <Header>
        
        <BotaoLista onClick={()=> props.mudaTela("lista match")}>
          <img src="src\assets\busca-home.png"/>
        </BotaoLista>

      </Header>
      
      <CardPerfil/>

      <div>
        
        <IconeMatch onClick={onClickCurtida}>
          <img src="src/assets/like.png"/>
        </IconeMatch>

        <IconeDeuRuim>
          onClick={onClickDislike}
          <img src="src/assets/dislike.png"/>
        </IconeDeuRuim>
       
      </div>
      
    </TelaInicial>
  );
}
