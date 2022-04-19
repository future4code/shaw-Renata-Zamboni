import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function IconeComContador(props) {
	return <IconeContainer>
		<img alt={'Icone'} src={props.iconeCurtida} onClick={props.numeroCurtidas}/>
		<p>{props.numerComentarios}</p>
	</IconeContainer>
}

export default IconeComContador