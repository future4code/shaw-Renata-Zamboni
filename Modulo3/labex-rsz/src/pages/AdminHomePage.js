import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const AdminHomePageBox =styled.div`
`


export function AdminHomePage() {

  return (

    <AdminHomePageBox>

      <button>Voltar</button>

      <button>Logout</button>

      <h1>Painel Administrativo</h1>

      <button>Criar Viagem</button>

      <li>
        <p>Lista vinda de create trip page</p>
      </li>      
     
    </AdminHomePageBox>
  );
}