import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { LoginFunction } from "../../services/LoginFunction";

export default function LoginForm() {
    const navigate = useNavigate()
    const [form, handleInputChange, clear]=useForm({email:"", password:""})

    const onSubmit=(event)=>{
    event.preventDefault()
    LoginFunction(form, clear, navigate)
    }

    return(  
        <div className="LoginForm">
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
            <button type={"submit"}>
                Continuar
            </button>
            {/* </RoundButtonPosition> */}        
            </form>
        </div>
    );
}

