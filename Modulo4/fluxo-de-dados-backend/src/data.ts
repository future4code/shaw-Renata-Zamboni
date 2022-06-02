// import { Produto } from "./index"

type Produto ={
    id: string,
    name:string,
    price: number,
    img: {}
}

export const produtos: Produto[]=[
    {
        id:"a",
        name: "Nave 1",
        price: 100.000,
        img:"https://pixabay.com/images/id-2624707/"
    },
    {
        id:"b",
        name: "Nave 2",
        price: 200.000,
        img:"https://pixabay.com/images/id-2841277/"
    },
    {
        id:"c",
        name: "Nave 3",
        price: 300.000,
        img:"https://pixabay.com/images/id-2651592/"
    },
    {
        id:"d",
        name: "Nave 4",
        price: 400.000,
        img:"https://pixabay.com/images/id-2730341/"
    },
    {
        id:"e",
        name: "Nave 5",
        price: 500.000,
        img:"https://pixabay.com/images/id-2923803/"
    }
]