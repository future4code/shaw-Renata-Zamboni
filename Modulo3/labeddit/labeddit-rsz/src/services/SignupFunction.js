import axios from "axios"
import { baseUrl } from "../constants/baseUrl";
import { vaiParaFeed } from "../routes/Coordinator";

export const SignupFunction = async (body, clear, navigate) =>{
    await axios.post (`${baseUrl}users/signup`, body)
    .then((res)=>{    
    localStorage.setItem("token", res.data.token)
    clear()
    vaiParaFeed(navigate)      
    })
    .catch((err)=>
    alert(err.response.data.message))

    console.log(body)
    console.log(localStorage)
}
