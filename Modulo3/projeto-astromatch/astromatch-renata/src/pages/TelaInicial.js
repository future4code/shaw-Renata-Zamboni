import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";
import { CardPerfil } from "../components/CardPerfil";
import { Header } from "../components/Header";
import iconeDislike from '../src/assets/dislike.png';
import iconeLike from '../src/assets/like.png';

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

  const iconeLike = like? iconeLike: iconeLike;

  const iconeDislike = dislike? iconeDislike: iconeDislike

  return (
    <TelaInicial>

      <Header>
        
        <BotaoLista onClick={()=> props.mudaTela("lista match")}>
          <img src="src\assets\busca-home.png"/>
        </BotaoLista>

      </Header>
      
      <CardPerfil/>

      <PostFooter>

        <IconeMatch
          icone={iconeLike}
          onClickIcone={onClickCurtida}
        />

        <IconeDeuRuim
          icone={iconeDislike}
          onClickIcone={onClickDislike}
        />
       
      </PostFooter>
      
    </TelaInicial>
  );
}
