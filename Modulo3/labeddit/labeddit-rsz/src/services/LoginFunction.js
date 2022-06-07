import axios from "axios"
import { useContext } from "react";
import { baseUrl } from "../constants/baseUrl";
import { GlobalContext } from "../global/GlobalContext";
import { vaiParaFeed } from "../routes/Coordinator";

export const LoginFunction = async (body, clear, navigate, logout) =>{
    await axios.post (`${baseUrl}users/login`, body)
    .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    vaiParaFeed(navigate)
    logout("Sair")              
    })
    .catch((err)=> alert(err.response.data.message))
}

