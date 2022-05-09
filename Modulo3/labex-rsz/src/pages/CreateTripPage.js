import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage } from "../routes/Coordinator";

const CreateTripPageBox =styled.div`
`


export function CreateTripPage() {
  const navigate = useNavigate()

  return (

    <CreateTripPageBox>

      <button onClick={()=> goToAdminHomePage(navigate)}>Voltar</button>

      <h1>Criar Viagem</h1>

      <input placeholder="Nome:" type="text"/><br/>  

      <br/>
      <form>
        <label placeholder="Escolha um Planeta">

          <select>
            <option value="">Lista de Planetas vinda da... API?</option>						
          </select>

        </label>
      </form><br/>

      <form>
          <label>
            Descrição do roteiro:      
            <br/><textarea/>
          </label>
      </form><br/>

      <input type="date"/><br/>
       
      <br/><button>Criar</button>  
       
    </CreateTripPageBox>
  );
}