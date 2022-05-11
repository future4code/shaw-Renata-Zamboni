import axios from "axios"
import { baseUrl } from "../constants/baseUrl";
import { vaiParaFeed } from "../routes/Coordinator";

export const LoginFunction = (body, navigate) =>{
    axios.post (`${baseUrl}users/login`, body)
    .then((res)=>{
    localStorage.setItem("token", res.data.token)
    vaiParaFeed(navigate)    
    })
    .catch((err)=>console.log(err.response.data))
    alert("Deu ruim. Confira os dados de Login.")
}