import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { SignupFunction } from "../../services/SignupFunction";

export default function SignupForm() {
    const navigate = useNavigate() 
    const [form, handleInputChange, clear]=useForm({username:"", email:"", password:""})

    const onSubmit=(event)=>{
        event.preventDefault()
        SignupFunction(form, clear, navigate)
    } 
    return(
        <div className="LoginForm">
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
                
                < button type={"submit"}>Cadastrar</button>
            </form>
        </div>
    );
}