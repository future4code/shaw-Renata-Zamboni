import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToListTripsPage } from "../routes/Coordinator";

const HomePageBox =styled.div`
`


export function HomePage() {

  const navigate=useNavigate()

 

  return (

    <HomePageBox>

      <h1>LabeX</h1>

      <button onClick={()=> goToListTripsPage(navigate)}>Ver Viagens</button>

      <button onClick={()=> goToLoginPage(navigate)}>Login Equipe</button> 
     
    </HomePageBox>
  );
}