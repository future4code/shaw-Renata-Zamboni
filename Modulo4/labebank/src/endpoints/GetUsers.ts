import { app } from "../index";
import { Request, Response } from "express";
import { Usuario, usuarios } from "../data/data";

//6 GET
app.get("/getUsers", (req, res)=>{
    res.status(201).send(usuarios)
})