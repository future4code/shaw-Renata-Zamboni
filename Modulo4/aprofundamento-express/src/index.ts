import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { tarefas } from "./tarefas";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//2
export type ToDo ={
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//3 array afazeres em taredfas.ts

//4
app.get("/todos", (req: Request, res: Response)=>{
    // if (tarefas > 0){
    //     res.send(tarefas)
    // }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});