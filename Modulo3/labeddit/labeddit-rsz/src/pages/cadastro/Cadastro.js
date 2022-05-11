import React from "react";

import { useNavigate } from "react-router-dom";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { Input, Tela, Titulo } from "../../global/GlobalStyles";

import { GlobalContext } from "../../global/GlobalContext";

import useForm from "../../hooks/useForm";
import { SignupFunction } from "../../services/SignupFunction";



export default function Cadastro() {

  const [form, handleInputChange]=useForm({username:"", email:"", password:""})

  const onSubmit=(event)=>{
    event.preventDefault()
    SignupFunction(form, navigate)
  }

  const navigate = useNavigate()  

  return (
    <Tela>      
      <button onClick={()=> vaiParaLogin(navigate)}>Entrar</button>
      <h1>Chega junto! ;)</h1>

      <form onSubmit={onSubmit}>        
        <input type="text" placeholder="Nome de Usuário"
        name={"username"} 
        value={form.username}
        onChange={handleInputChange}/>
        <br/><br/>

        <input type="text" placeholder="E-mail"
        name={"email"}
        value={form.email}
        onChange={handleInputChange}/>
        <br/><br/>
        
        <input type="password" placeholder="Senha"
        name="password"
        value={form.password}
        onChange={handleInputChange}/>

        <p>Senha deve possuir no mínimo 8 e no máximo 30 caracteres</p>
        <p><strong>Me comprometo em ser legal.</strong></p>
        <br/>        
        {/* RoundButton / onClick={()=>vaiParaFeed(navigate)}*/}
        < button type="submit">
          Cadastrar
        </button>
      </form>
      
    </Tela>
  );
}