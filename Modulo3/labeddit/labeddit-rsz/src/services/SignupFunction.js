import axios from "axios"
import { baseUrl } from "../constants/baseUrl";
import { vaiParaFeed } from "../routes/Coordinator";

export const SignupFunction = (body, navigate) =>{
    axios.post (`${baseUrl}users/signup`, body)
    .then((res)=>{    
    localStorage.setItem("token", res.data.token)
    vaiParaFeed(navigate)    
    })
    .catch((err)=>console.log(err.response.data))
    alert("Deu ruim. :( Preencheu tudo certinho?")

    console.log(body)
}
