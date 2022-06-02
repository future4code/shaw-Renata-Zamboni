import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./userData";


const app = express();
app.use(express.json());
app.use(cors());

//1
app.get("/users", (req:Request, res: Response)=>{

});

//1a -
//1b -

//2



app.listen(3003, () => {
   console.log("Server is running in http://localhost:3003")
});