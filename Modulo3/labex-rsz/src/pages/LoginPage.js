import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage } from "../routes/Coordinator";
import { urlBase, pathVariables} from "../constants/Constants";

const LoginPageBox =styled.div`
`


export function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail]=useState("")
  const [senha, setSenha]= useState("")
  const [login, setLogin]=useState("")

  const onChangeEmail =(event)=>{
    setEmail(event.target.value)
  }

  const onChangeSenha=(event)=>{
    setSenha(event.target.value)
  }

  const onClickEntrar =()=>{
    const body={
        email:"rnt.zamboni@gmail.com.br",
        password:"123456,"
    }
      
    console.log(body)

   axios.post(`${urlBase}/login`, body, pathVariables)

  .then(()=>{
   setLogin(window.localStorage.setItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9xOW43OE52ejF2aWZSOENEMjZFIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTE0OTU0MTF9.y73Ytij0pa60YjR9t_ibunJUCZvZXsee5aCzf8Jdhhk"))
   navigate(goToAdminHomePage)
    
   }).catch((erro)=>{
        alert(erro.data.response);
   })
}  

  return (

    <LoginPageBox>

      <button onClick={()=>goBack(navigate)}>Voltar</button>  

      <h1>Login</h1>

      <input placeholder="e-mail" type="text" onChange={onChangeEmail} value={email}/>
      <input placeholder="e-mail" type="password"onChange={onChangeSenha} value={senha}/>

      <button onClick={()=>onClickEntrar} value ={login}>Entrar</button>

          
     
    </LoginPageBox>
  );
}