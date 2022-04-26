import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const ApplicationFormPageBox =styled.div`
`


export function ApplicationFormPage() {

  return (

    <ApplicationFormPageBox>

        <button>Voltar</button>

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

        {/*<br/><input placeholder="Por que quer fazer essa viagem?" type="text"></input><br/>*/}
        
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