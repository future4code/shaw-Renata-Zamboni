//Exercícios de interpretação

//1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a
//10
//50

//b
//Não aparece nada porque não há comando para algo ser exibido no console

//2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a
/*A função .toLowerCase transforma em minusculas todas as letras do texto inserido no prompt e 
a função .includes() mostra se esse texto pode ser encontrado na String.*/

//b
//Todas as respostas retornam True, pois os caracteres inseridos correspondem ao que é chamado na função.

//Exercícios de escrita de código


