import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const CreateTripPageBox =styled.div`
`


export function CreateTripPage() {

  return (

    <CreateTripPageBox>

        <button>Voltar</button>

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