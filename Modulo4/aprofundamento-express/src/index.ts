import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { tarefas, ToDo } from "./tarefas";
import { addAbortSignal } from "stream";


const app = express();
app.use(express.json());
app.use(cors());

//1 teste localhost
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//retorna todo o array de tarefas = playlists
app.get("/tarefas", (req, res)=>{
    res.status(201).send(tarefas)    
})

//2 e 3 em tarefas.ts

//4 retornar somente os afazeres concluidos

//retorna lista completa de tarefas = playlists by id
app.get("/tarefas/title", (req, res)=>{
    const listaTarefas = tarefas.map((tarefa)=>{
        return tarefa.title;
    })
    res.send(listaTarefas)
})

//retornar tarefas concluídas = playlist by id + condição
app.get("/tarefas/title/:completed", (req: Request, res: Response)=>{

    const listaTarefaConcluida = tarefas.filter((tarefaFeita)=>{
        let statusTarefa:any = req.params.completed

        if (statusTarefa === "true"){
            statusTarefa = true              
        }else if(statusTarefa === "false"){
            statusTarefa = false
            res.status(401).send("Não há tarefa concluida")                
        }else{
            res.send("Value de Path Variables deve ser True or False")
        }
        return tarefaFeita.completed
        
        // const resultado = tarefaFeita.completed
    })
    res.status(200).send(listaTarefaConcluida)    
})

//5 add tarefa = post playlist
app.post("/adicionarTarefa", (req, res)=>{
    const {userId, title} = req.body 

    // const listaTarefas = tarefas.map((tarefa)=>{
    //     return tarefa.title;
    // })
    
    const novaTarefa: ToDo ={
        userId,
        id: Date.now(),
        title,
        completed: false,
    }

    tarefas.push(novaTarefa)
    res.status(201).send(tarefas)    
})

//6 editar afazer - completo > incompleto = delete playlist?
app.put("/editarTarefa/:completed", (req, res)=>{  
    let statusTarefa = req.params.completed
      
    const atualizaTarefa = tarefas.map((tarefa)=>{
        if (tarefa.completed === true ){
            return{
                ...tarefa,                        
                completed: !statusTarefa
            }
        }else{
            return tarefa;
        }             
    })
    res.status(201).send(atualizaTarefa)   
})

//7 delete tarefa by id = delete track
app.delete("/tarefas/:idTarefa", (req,res)=>{
    const idTarefa = Number(req.params.idTarefa);

    const apagaTarefa = tarefas.map((tarefa)=>{
        if (tarefa.id === idTarefa){
            return{
                tarefa:[]
            }
        }else{
            return tarefa
        }
    })
    res.status(201).send(apagaTarefa) 
})

//8




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});