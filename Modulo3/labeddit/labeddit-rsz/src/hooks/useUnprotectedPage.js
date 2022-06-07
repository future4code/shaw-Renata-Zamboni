import { Navigate, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { vaiParaFeed } from "../routes/Coordinator";

const useUnprotectedPage =()=>{
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            vaiParaFeed(navigate)
        }
    },[navigate])
}

export default useUnprotectedPage;