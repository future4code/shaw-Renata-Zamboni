import React from "react";

import { useNavigate } from "react-router-dom";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { Input, Tela, Titulo } from "../../global/GlobalStyles";

import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignupForm from "./SignupForm";
import Header from "../../components/header/Header";
import { HeaderButton } from "../../components/header/StyledHeader";



export default function Cadastro() {
  useUnprotectedPage()
  const navigate = useNavigate()   

  return (
    <Tela>      
      
      {/* <HeaderButton onClick={()=> vaiParaLogin(navigate)}>Entrar</HeaderButton> */}
            
      <h1>Chega junto! ;)</h1>
      <SignupForm/>     
      
    </Tela>
  );
}