import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const TripDetailsPage =styled.div`
`


export function TripDetailsPage() {

  return (

    <TripDetailsPage>

        <button>Voltar</button>

        <div className="CardViagem">
        
            <div>
                item vindo da api? ou props de input...?
            </div>

        </div>

        <div>
            <h3>Candidatos pendentes</h3>
            <li>
                {}
            </li>

            <h3>Candidatos aprovados</h3>

            <li>
                {}
            </li> 
        </div>            
     
    </TripDetailsPage>
  );
}