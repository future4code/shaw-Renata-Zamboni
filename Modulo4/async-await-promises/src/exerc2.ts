import axios from "axios";
import { baseUrl } from "./constants/baseUrl";

//a ambas retornam promises e permitem controlar ordem de conclusão das requisições, uma é função, outra variavel.

//b
const getSubscribers = async(): Promise<any[]> =>{ 
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
};