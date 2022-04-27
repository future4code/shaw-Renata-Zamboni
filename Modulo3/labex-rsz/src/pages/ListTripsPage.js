import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../routes/Coordinator";

import { headers, urlBase } from "../constants/Constants";

const ListTripsPageBox =styled.div`
`


export function ListTripsPage() {
  
  const navigate=useNavigate()

  const [tripList, setTripList]= useState([])

  useEffect(()=>{
    
    axios.get(`${urlBase}/trips`, headers)
    .then((response)=>{
      setTripList(response.data.trips);
  
    }).catch((err)=>{
      console.log(err);
    })

  },[])

  const showList = tripList.map((trip)=>{
    return(
        <ul>
          <li key={trip.id}>
          <p>{trip.name}</p>
          <p>{trip.description}</p>
          <p>{trip.planet}</p>
          <p>{trip.duration}</p>
          <p>{trip.date}</p>
          </li>
        </ul>
      );
  })
  
  
  return (

    <ListTripsPageBox>

      <h1>Lista de Viagens</h1>

      <button onClick={()=> goBack(navigate)}>Voltar</button>

      <button onClick={()=> goToApplicationFormPage(navigate)}>Inscrever-se</button>

      {showList}          
     
    </ListTripsPageBox>
  );
}