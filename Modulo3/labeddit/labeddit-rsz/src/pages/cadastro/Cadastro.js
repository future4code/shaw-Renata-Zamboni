import React from "react";

import { useNavigate } from "react-router-dom";
import { vaiParaFeed, vaiParaLogin } from "../../routes/Coordinator";

import { Input, Tela, Titulo } from "../../global/GlobalStyles";

import { GlobalContext } from "../../global/GlobalContext";

import useForm from "../../hooks/useForm";
import { SignupFunction } from "../../services/SignupFunction";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



export default function Cadastro() {
  useUnprotectedPage()
  const navigate = useNavigate()  

  const [form, clear, handleInputChange]=useForm({username:"", email:"", password:""})

  const onSubmit=(event)=>{
    event.preventDefault()
    SignupFunction(form, clear, navigate)
  }  

  return (
    <Tela>      
      <button onClick={()=> vaiParaLogin(navigate)}>Entrar</button>
      <h1>Chega junto! ;)</h1>

      <form onSubmit={onSubmit}>        
        <input type="text" placeholder="Nome de Usuário"
        required
        name={"username"} 
        value={form.username}
        onChange={handleInputChange}/>
        <br/><br/>

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