import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/Coordinator";
import { goToHomePage } from "../routes/Coordinator";

const AdminHomePageBox =styled.div`
`


export function AdminHomePage() {

  const navigate = useNavigate()

  return (

    <AdminHomePageBox>

    <button onClick={()=> goToLoginPage(navigate)}>Voltar</button>

      <button onClick={()=>goToHomePage(navigate)}>Logout</button>

      <h1>Painel Administrativo</h1>

      <button onClick={()=>(navigate)}>Criar Viagem</button>

      <li>
        <p>Lista vinda de create trip page</p>
      </li>      
     
    </AdminHomePageBox>
  );
}