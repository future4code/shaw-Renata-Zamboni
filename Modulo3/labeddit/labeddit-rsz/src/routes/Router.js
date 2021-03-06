import { Routes, Route, BrowserRouter} from "react-router-dom";

import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Feed from "../pages/feed/Feed";
import Post from "../pages/post/Post";

const Router = ()=>{
    return(

        <BrowserRouter>            
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Feed" element={<Feed/>}/>
                <Route path="/Feed/Post" element={<Post/>}/>
            </Routes>
        </BrowserRouter>        
    )
}     
            


export default Router;