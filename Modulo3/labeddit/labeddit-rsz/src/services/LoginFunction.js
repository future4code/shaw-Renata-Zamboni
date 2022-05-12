import axios from "axios"
import { baseUrl } from "../constants/baseUrl";
import { vaiParaFeed } from "../routes/Coordinator";

export const LoginFunction = async (body, clear, navigate) =>{
    await axios.post (`${baseUrl}users/login`, body)
    .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    vaiParaFeed(navigate)        
    })
    .catch((err)=>
    alert(err.response.data.message))
}