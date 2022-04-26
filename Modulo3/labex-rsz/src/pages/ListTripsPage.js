import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const ListaTripsPageBox =styled.div`
`


export function ListTripsPage() {

  return (

    <ListaTripsPageBox>

      <h1>Lista de Viagens</h1>

      <button>Voltar</button>

      <button>Inscrever-se</button>

      <li>
        {}
      </li>      
     
    </ListaTripsPageBox>
  );
}