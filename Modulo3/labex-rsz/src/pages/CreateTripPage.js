import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";


export function CreateTripPage() {

  return (

    <CreateTripPage>

        <button>Voltar</button>

       <h1>Criar Viagem</h1>

       <input placeholder="Nome:" type="text"/>

       <form>

            <label placeholder="Escolha um Planeta">				
                <select>
                    <option value="">Lista de Planetas vinda da... API?</option>						
                </select>
            </label>

        </form>

        <input placeholder="Descrição do roteiro" type="text"/>

        <input type="date"/>
       
       <button>Criar</button>  
       
    </CreateTripPage>
  );
}