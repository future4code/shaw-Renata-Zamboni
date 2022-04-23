import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";
import { Header } from "../components/Header";


const CardLista = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  
`
const BotaoHome = styled.div`
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border-radius: 50%;
   
`

export const ListaMatch=(props)=> {
  
  const [usersList, setUsersList]=useState([])
  
    useEffect(() => {
      axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
        .then((res) => {
          setUsersList(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    

  return (

    <ListaMatch>

      <Header>
        <BotaoHome onClick={()=> props.mudaTela("tela inicial")}>
          <img src="src\assets\lista-match.png"/>
        </BotaoHome>
      </Header>            

      <CardLista>
        <ul>
          {usersList}
        </ul>
      </CardLista>     
      
    </ListaMatch>
  );
}