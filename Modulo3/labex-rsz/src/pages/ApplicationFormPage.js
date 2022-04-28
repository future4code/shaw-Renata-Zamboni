import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import {useNavigate} from "react-router-dom";
import { goBack } from "../routes/Coordinator";
import { headers, urlBase} from "../constants/Constants";

import CountrySelect from 'react-bootstrap-country-select';

const ApplicationFormPageBox =styled.div`
`



export function ApplicationFormPage() {

    const navigate = useNavigate()

    //mesma lógica do estado de ListTripPage, mas com ID
    const [getTrip, setGetTrip]= useState([])
    const [id, setId] = useState("")

    //post + um state pra cada item do body que recebe um input
    const [postApply, setPostApply]= useState([])
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(Number)
    const [profissao, setProfissao] = useState("")
    const [textoCandidatura, setTextoCandidatura] =  useState("")    
    //const [pais, setPais] = useState([])
    //react country select
    [value, setValue] = React.useState(null)      
   
    
   //useEffect+ axios para GET TRIP
    useEffect(()=>{
        
        axios.get(`${urlBase}/trips`)
        .then((response)=>{
            setGetTrip(response.data.trips);   
        }).catch((err)=>{
            alert(err.data.response);
        }) 

    },[])

    const showList = getTrip.map((trip)=>{
        return(
            <option key={trip.id} value={trip.id}>
                {trip.name}
            </option>
        );
    })
    console.log(id)

    const applyToTrip =()=>{
        const body={
            name: nome,
            age: idade,
            applicationText: textoCandidatura,
            profession: profissao,
            country: pais
        }
        console.log(body)

       axios.post(`${urlBase}/trips/${id}/apply`, body)

      .then((response)=>{
       setPostApply(response.data.apply);
        
       }).catch((err)=>{
            alert(err.data.response);
       })
    } 

  //OnChange pra cada input
  const onChangeId = (event)=>{
    setId(event.target.value)
  }

  const onChangeNome = (event)=>{
      setNome(event.target.value)
    }

  const onChangeIdade=(e)=>{
      setIdade(e.target.value)
    }

  const onChangeProfissao=(e)=>{
      setProfissao(e.target.value)
  }

  const onChangeTextoCandidatura = (e)=>{
    setTextoCandidatura (e.target.value)
  }

  /*const onChangePais=(event)=>{
      setPais(event.target.value)
  }*/
    

  return (

    <ApplicationFormPageBox>

        <button onClick={()=> goBack(navigate)}>Voltar</button>

        <h1>Formulário de inscrição</h1>

        {/*passo 2 - map em get trip, mas com ID*/}
        <form>
			<label>
                Escolha uma viagem:
                <br/>				
				<select onChange={onChangeId}>
					{showList}						
				</select>
			</label>
		</form>
        
        {/* passo 2.1 - inputs de formulario - post Apply to trip */}
        <br/>
        <input placeholder="Nome"type="text" onChange={onChangeNome}></input><br/>

        <br/><input placeholder="Idade" type="number" onChange={onChangeIdade}></input><br/>

        <br/><input placeholder="Profissão" type="text" onChange={onChangeProfissao}></input><br/>
              
        <br/>
        <form>
            <label>
                Qual sua motivação para a viagem?      
                <br/>
                <textarea onChange={onChangeTextoCandidatura}/>
            </label>
        </form>

        {/*passo 2.2 */}
        <br/>
        <form>
            <label>
                Em qual país reside?
                <br/>			
                <CountrySelect value={value} onChange={setValue}/>
            </label>
        </form>

        <br/>
        <button onClick={applyToTrip}>Enviar Inscrição</button>
       
       
    </ApplicationFormPageBox>
  );
}