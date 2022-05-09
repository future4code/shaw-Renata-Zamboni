import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { goToAdminHomePage } from "../routes/Coordinator";

const TripDetailsPageBox =styled.div`
`


export function TripDetailsPage() {
    const navigate = useNavigate()

  return (

    <TripDetailsPageBox>

        <button onClick={()=> goToAdminHomePage(navigate)}>Voltar</button>

        <div className="CardViagem">
        
            <div>
                item vindo da api? ou props de input...?
            </div>

        </div>

        <div>
            <h3>Candidatos pendentes</h3>
            <ul>
                <li>
                    {}
                </li>
            </ul>

            <h3>Candidatos aprovados</h3>
            <ul>
                <li>
                    {}
                </li>
            </ul>
        </div>            
     
    </TripDetailsPageBox>
  );
}