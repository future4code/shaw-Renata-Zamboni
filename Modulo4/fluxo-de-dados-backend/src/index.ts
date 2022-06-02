import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { produtos } from "./data";


const app = express();
app.use(express.json());
app.use(cors());

//1
app.get("/teste-ping", (req: Request, res: Response) =>{
    res.send("Pong tá on")
})

//2 data.ts
app.post("/create-product", (req, res)=>{
    
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});