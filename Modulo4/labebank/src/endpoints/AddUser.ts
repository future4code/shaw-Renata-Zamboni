import { app } from "../index";
import { Request, Response } from "express";
import { Usuario, usuarios } from "../data/data";

//5 POST
app.post("/AddUser",(req: Request, res: Response)=>{
    const {userId, nome, cpf, nascimento} = req.body

    const novoUsuario: Usuario ={
        userId,
        nome,
        cpf,
        nascimento
    }
    usuarios.push(novoUsuario)
    res.status(201).send(usuarios)

    //requisição de idade
    //if (usuario.nascimento >= 18){
    //     return novoUsuario
    // }else{
    //     res.status(400).send("Não cadastramos menores de 18 anos")
    // }
    
})