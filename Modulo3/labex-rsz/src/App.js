import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { Router } from "./routes/Router";


const CaixaApp =styled.div`
`


export default function App() {
  return (

    <div className="CaixaApp">

      <Router/>       
      
        <p>
          EITA, MUNDO GRANDE SEM PORTEIRA!
        </p>
       
    </div>
  );
}