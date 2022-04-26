import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const LoginPage =styled.div`
`


export function LoginPage() {

  return (

    <LoginPage>

      <h1>Login</h1>

      <input placeholder="e-mail" type="text"/>
      <input placeholder="e-mail" type="password"/>

      <button>Voltar</button>      
     
    </LoginPage>
  );
}