//Exercícios de interpretação de código

/*
//1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a
//Verifica se o número inserido pelo usuário pode ser dividido por dois e ter resto igual a zero.

//b
//Imprime "Passou no teste" para os números que são divisiveis por dois, com resto igual a zero.

//c
//A resposta "Não passou no teste" é impressa para as entradas cujo resto da divisão por dois é diferente de zero.

//2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a
//Para consultar o preço das frutas a venda

//b
//"O preço da fruta Maçã é R$ 2.25"

//c
//"O preço da fruta Pêra é R$ 5.", pois sem o Break não é possível executar o código do bloco.

//3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a
//Cria um comando para o prompt requisitando que o usuário digite um número.

//b
//Se o usuário digitasse 10 a mensagem retornada seria "Esse número passou no teste".
//Digitando -10 aparece -10 no console.

//c
//Há um erro no código uma vez que a condicionante else (oposta e complementar a if) não foi definida.
*/ 


//Exercícios de escrita de código
/*
//1
//a & b
const idadeUsuario = Number(prompt("Qual é a sua idade?"))
const idadeMinima = 18
//c

function maioridade(pessoa, dezoitoAnos){
    
    if(pessoa >= dezoitoAnos){
        return "Você pode dirigir"
    }else{
        return "Você não pode dirigir ainda."
    }
}
console.log(maioridade(idadeUsuario, idadeMinima))

*/

//2
//a
const periodoEstudo = prompt("Se você estuda no período Matutino, digite M. Se você estuda no período Vespertino, digite V. Mas se você estuda no período Noturno digite N.")

const respostas = {
    horario1: "M", 
    horario2: "V",
    horario3: "N"
}

function periodos(horario){

    if(periodoEstudo === respostas.horario1){
        console.log("Bom dia!")
    }else if(periodoEstudo === respostas.horario2){
        console.log("Boa Tarde!")
    }else{
        console.log("Boa Noite!")
    }
    
}
periodos(periodoEstudo)

//3
/*

function periodoAula(horario) {

    switch (horario) {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
        default:
            console.log("Boa noite!")
            break;
    }
}

periodoAula(respostas.horario1)
periodoAula(respostas.horario2)
periodoAula(respostas.horario3)

*/
