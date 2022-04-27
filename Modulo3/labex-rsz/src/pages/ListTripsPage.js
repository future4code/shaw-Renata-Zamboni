import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/Coordinator";
import { goToApplicationFormPage } from "../routes/Coordinator";
import { headers, urlBase } from "../constants/Constants";

const ListaTripsPageBox =styled.div`
`


export function ListTripsPage() {
  
  const navigate=useNavigate()

  const [tripList, setTripList]= useState([])

  useEffect(()=>{
    
    axios.get(`${urlBase}/trips`, headers)
    .then((response)=>{
      setTripList(response.data.results);
  
    }).catch((err)=>{
      console.log(err);
    })

  },[]) 
  
  
  return (

    <ListaTripsPageBox>

      <h1>Lista de Viagens</h1>

      <button onClick={()=> goBack(navigate)}>Voltar</button>

      <button onClick={()=> goToApplicationFormPage(navigate)}>Inscrever-se</button>

      {tripList.map((trip)=>{
        return(
            <li>
              <p>{trip}</p>
            </li>
          );
      })}
          
     
    </ListaTripsPageBox>
  );
}