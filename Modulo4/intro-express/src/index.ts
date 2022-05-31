import express, {application, Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { users } from './userData';
import { posts } from './postData';

const app: Express = express();

app.use(express.json()); //middleware
app.use(cors()); //middleware

app.get("/", (req, res) => {          
   res.send("Hello from Express")
})

//2
// endpoints que buscam usuarios
// GET /users - vem todos, com todas infos
// GET /users/1 - todas infos do primeiro

// app.get("/users", (req, res)=>{
//    res.send("Lista de usuarios")
// })

//criar uma variavel de tipo
export type UserData = {
   id: number,
   name: string,
   phone: number | string,
   email: string,
   website: string
}

//3 array de usuarios em userData.ts

//4
app.get("/users", (req, res) =>{  
   if (users.length <0){
      res.status(201).send(users)
   }else{
      res.status(401).send("Usuários não encontrados.")
   }  
})

//5
export type Post = {
   userId: number,
   id: number,
   title: string,
   body: string   
}

//6 array de posts em postData.ts
//Achei melhor criar fora do array de usuários pra 1. separar as infos por categoria, 2. não fazer um "inception" de arrays de objetos

//7
app.get("/posts", (req, res)=>{
   if (posts.length <0){
      res.status(201).send(posts)
   }else{
      res.status(401).send("Postagens não encontradas")
   }  
})

//8 aaaaaah sos... corrigido.
app.get("posts/:userId",(req: Request, res: Response)=>{
   const userId = Number(req.params.userId)

   const getUserPost = posts.filter((post)=>{
      if (post.userId === userId){
         
         res.status(201).send(getUserPost) 
      }
   })      
         
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
