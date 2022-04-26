import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const ApplicationFormPage =styled.div`
`


export function ApplicationFormPage() {

  return (

    <ApplicationFormPage>

        <button>Voltar</button>

        <h1>Formulário de inscrição</h1>

        <form>

			<label placeholder="Escolha uma viagem">				
				<select>
					<option value="">Lista vinda de CreatTripPage</option>						
				</select>
			</label>

		</form>

        <input placeholder="Nome"type="text"></input>
        <input placeholder="Idade" type="text"></input>
        <input placeholder="Profissão" type="text"></input>
        <input placeholder="Por que quer fazer essa viagem?" type="text"></input>

        <form>

            <label placeholder="Em qual país reside">				
                <select>
                    <option value="">Lista de países vinda de...?</option>						
                </select>
            </label>

        </form>

        <button>Enviar Incrição</button>
       
       
    </ApplicationFormPage>
  );
}