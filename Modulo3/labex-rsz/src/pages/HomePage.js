import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const HomePageBox =styled.div`
`


export function HomePage() {

  return (

    <HomePageBox>

      <h1>LabeX</h1>

      <button>Ver Viagens</button>

      <button>Login Equipe</button> 
     
    </HomePageBox>
  );
}