import express, {application, Express} from 'express';
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
type UserInfo = {
   id: number,
   name: string,
   phone: number | string,
   email: any,
   website: any
}

//3 array de usuarios em data.ts

//4
app.get("/users", (req, res)=>{
   const myUsers = users.map((user)=>{
      return users
   })
   res.send(myUsers)
})

//5
type Posts = {
   userId: number,
   id: number,
   title: string,
   body: string   
}

//6 array de posts em postData.ts
//achei melhor criar fora do array de usuários pra 1. separar as infos por categoria, 2. não fazer um "inception" de arrays de objetos

//7
app.get("/posts", (req, res)=>{
   const postList = posts.filter((post)=>{
      return posts
   })
   res.send(postList)
})

//8 aaaaaah sos
// app.get("posts/:userId",(req, res)=>{
//    const postId = req.params.postId;

//    const getUserPost = posts.filter((post)=>{
//       if (post.id === postId){
//             return post
//          }
//       })      
   
//    res.send(getUserPost)
// })


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
