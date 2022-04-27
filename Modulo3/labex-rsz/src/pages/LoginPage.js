import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage } from "../routes/Coordinator";

const LoginPageBox =styled.div`
`


export function LoginPage() {
  const navigate = useNavigate()

  return (

    <LoginPageBox>

      <button onClick={()=>goBack(navigate)}>Voltar</button>  

      <h1>Login</h1>

      <input placeholder="e-mail" type="text"/>
      <input placeholder="e-mail" type="password"/>

      <button onClick={()=>goToAdminHomePage(navigate)}>Entrar</button>

          
     
    </LoginPageBox>
  );
}