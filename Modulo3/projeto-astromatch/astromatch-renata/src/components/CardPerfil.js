import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";

const CaixaPerfil = styled.div`
 width: 100%;
 border: 1px solid gray;
 margin-bottom: 10px;
  
`

export const CardPerfil = (props)=>{

  const [users, setUsers]= useState({})

  useEffect(()=>{
    getUsers(props.users)
  },[props.users]);

  const getUsers=()=>{
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`)
    .then((response)=>{
      setUsers(response.data)

    }).catch((error)=>{
      console.log(error)
    })
  }

  const selectMatch=(event)=>{
    setUsers(event.target.value)
  } 

  
  return (
    <CaixaPerfil>
      {CardPerfil}    

    </CaixaPerfil>
  );

}