import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import {useNavigate} from "react-router-dom";
import { goBack } from "../routes/Coordinator";

const ApplicationFormPageBox =styled.div`
`


export function ApplicationFormPage() {
    const navigate = useNavigate()
    
    

  return (

    <ApplicationFormPageBox>

        <button onClick={()=> goBack(navigate)}>Voltar</button>

        <h1>Formulário de inscrição</h1>

        {/*passo 2 - map em get trip*/}
        <form>
			<label>
                Escolha uma viagem:
                <br/>				
				<select>
					<option value="">Lista vinda de getTrips</option>						
				</select>
			</label>
		</form>
        
        {/* passo 2.1 - inputs de formulario - post Apply to trip */}
        <br/>
        <input placeholder="Nome"type="text"></input><br/>
        <br/><input placeholder="Idade" type="text"></input><br/>
        <br/><input placeholder="Profissão" type="text"></input><br/>
              
        <br/>
        <form>
            <label>
                Qual sua motivação para a viagem?      
                <br/>
                <textarea/>
            </label>
        </form>

        {/*passo 2.2 */}
        <br/>
        <form>
            <label>
                Em qual país reside?
                <br/>			
                <select>
                    <option value="">Lista de países</option>						
                </select>
            </label>
        </form>

        <br/>
        <button>Enviar Inscrição</button>
       
       
    </ApplicationFormPageBox>
  );
}