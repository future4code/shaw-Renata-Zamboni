// import { ToDo } from "./index";
export type ToDo ={
  userId: number,
  id: number,
  title: string,
  completed: boolean
};

export const tarefas: ToDo[]=[
  {
  "userId": 11,
  "id": 1,
  "title": "estudar",
  "completed": true,
},
{
  "userId": 22,
  "id": 2,
  "title": "se exercitar",
  "completed": false,
},
{
  "userId": 33,
  "id": 3,
  "title": "meditar",
  "completed": false
},
{
  "userId": 44,
  "id": 4,
  "title": "passear com cachorro",
  "completed": false,
},
{
  "userId": 55,
  "id": 5,
  "title": "estudar js",
  "completed": true,
},
]