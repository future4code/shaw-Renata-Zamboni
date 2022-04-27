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

        <form>

			<label>
                Escolha uma viagem:
                <br/>				
				<select>
					<option value="">Lista vinda de CreatTripPage</option>						
				</select>
			</label>

		</form><br/>

        <input placeholder="Nome"type="text"></input><br/>
        <br/><input placeholder="Idade" type="text"></input><br/>
        <br/><input placeholder="Profissão" type="text"></input><br/>
              
        <br/>
        <form>
            <label>
                Qual a motivação para a viagem?      
                <br/><textarea/>
            </label>
        </form>

        <br/>
        <form>

            <label placeholder="Em qual país reside">				
                <select>
                    <option value="">Lista de países vinda de...?</option>						
                </select>
            </label>

        </form><br/>

        <button>Enviar Inscrição</button>
       
       
    </ApplicationFormPageBox>
  );
}