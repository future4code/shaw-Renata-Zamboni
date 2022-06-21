import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./userData";
import { NewUser, User, UserType } from "./types";


const app = express();
app.use(express.json());
app.use(cors());

//1
app.get("/users", (req:Request, res: Response)=>{
   res.status(200).send(users)
});

//1a - GET
//1b - "/users"

//2
app.get("/users", (req:Request, res: Response)=>{
   let errorCode: number = 400;
   const type: string = req.query.name as string;
   
   const userType = users.filter((user)=>{  
      try {  
            
         if(user.type === type){
            res.status(200).send(user)
         }

         if(!user){
         errorCode = 404;
         throw new Error("User not found")
         }      

      } catch (error: any) {
      res.status(errorCode).send({ message: error.message });
      }
   })

});

//2a)




app.listen(3003, () => {
   console.log("Server is running in http://localhost:3003")
});