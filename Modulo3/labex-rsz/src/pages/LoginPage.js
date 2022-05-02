import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage } from "../routes/Coordinator";

const LoginPageBox =styled.div`
`


export function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail]=useState("");
  const [senha, setSenha]= useState("")

  onChangeEmail =(event)=>{
    setEmail(event.target.value)
  }

  onChangeSenha=(event)=>{
    setSenha(event.target.value)
  }

  const login =()=>{
    const body={
        email:"rnt.zamboni@gmail.com.br",
        password:"123456,"
    }
      
    console.log(body)

   axios.post(`${urlBase}/login`, body, pathVariables)

  .then((response)=>{
   setPostApply(response.data.apply);   
    
   }).catch((erro)=>{
        alert(erro.data.response);
   })
}  

  return (

    <LoginPageBox>

      <button onClick={()=>goBack(navigate)}>Voltar</button>  

      <h1>Login</h1>

      <input placeholder="e-mail" type="text" onChange={onChangeEmail}/>
      <input placeholder="e-mail" type="password"onChange={onChangeSenha}/>

      <button onClick={()=>goToAdminHomePage(navigate)}>Entrar</button>

          
     
    </LoginPageBox>
  );
}