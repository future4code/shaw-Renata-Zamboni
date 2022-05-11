import React from "react";

import { GlobalContext } from "../../global/GlobalContext";

import {useNavigate} from "react-router-dom";
import { vaiParaCadastro, vaiParaFeed } from "../../routes/Coordinator";

import { Input, Logo, RoundButton, RoundWhiteButton, Tela, Titulo } from "../../global/GlobalStyles";
import ReLogo from "../../assets/RêEddit_Logo.jpg";
import { LogoTitulo, RoundButtonPosition, Subtitulo } from "./StyledLogin";

import useForm from "../../hooks/useForm";
import { LoginFunction } from "../../services/LoginFunction";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function Login() {
  useUnprotectedPage()
  const navigate = useNavigate()

  const [form, clear, handleInputChange]=useForm({email:"", password:""})

  const onSubmit=(event)=>{
    event.preventDefault()
    LoginFunction(form, clear, navigate)
  }  

  return (
    <Tela>
      <div>
      
        <Logo src={ReLogo}/>
        <h1>RêEddit</h1>
        <h3>O Fórum</h3>
     
      </div>

      <form onSubmit={onSubmit}>    

        <input type="text" placeholder="E-mail"
        required        
        name={"email"}
        value={form.email}
        onChange={handleInputChange}/>
        <br/><br/>

        <input type="password" placeholder="Senha"
        required        
        name="password"
        value={form.password}
        onChange={handleInputChange}/>
        <br/><br/>

        {/* <RoundButtonPosition> / onClick={()=> vaiParaFeed(navigate)}*/}
          <button type="submit">
            Continuar
          </button>
        {/* </RoundButtonPosition> */}        
      </form>
      <br/><br/>

      <button onClick={()=>vaiParaCadastro(navigate)}>
        Crie uma conta!
      </button>
        
    </Tela>
  );
}