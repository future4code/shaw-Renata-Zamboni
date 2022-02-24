//Exercícios de interpretação de código


/*
//1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//Percorrendo os valores de um array. Resultado impresso = 10.

//2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a
//O código está imprimindo os números maiores de 18, incluindo o número 18.

//b
// O índice seria 1. uma lista de condicionais do elemento ou 2. só o valor/nome que ele apresenta no array?
//Para entendimento 1 acredito que function seria melhor, para 2. a estrutura for...of...

//3
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

//Ele imprime uma sequencia de asteriscos de acordo com número que é inserido no prompt.
//Com o usuário inserindo 4 temos: 
//*
//**
//***
//****

*/

//Exercícios de escrita de código
