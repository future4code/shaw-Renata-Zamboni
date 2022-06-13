import axios from "axios";
import { baseUrl } from "./constants/baseUrl";

//a GET/subscribers

//b async function functionName(): Promise<any[]> 

//c
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
};






