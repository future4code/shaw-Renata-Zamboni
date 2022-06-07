import { Navigate, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { vaiParaLogin } from "../routes/Coordinator";

const useProtectedPage =()=>{
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            vaiParaLogin(navigate)
        }
    },[navigate])
}

export default useProtectedPage;