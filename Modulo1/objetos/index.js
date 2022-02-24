//Exercícios de interpretação de código

//1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a
//Matheus Nachtergaele
//18? - Virginia Cavendish
//{canal: "Globo", horario: "14h"}

//2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a 
//Juca, 3, SRD
//Juba, 3, SRD
//Jubo, 3, SRD
//Obs.: Errei, pois imprime o array inteiro: {"nome": "Juca", "idade": 3, "raca": "SRD"}

//b
//Copia as informações do objeto anterior e acrescenta ou altera parâmetros e dados

//3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a 
//false
//indefinido

//b
/*A função pede para checar uma propriedade específica dentro do objeto pessoa e,
//de acordo com os parâmetros apresentados, Caio não é um backender (false) e 
sua altura retorna como "undefined", pois esse parâmetro não foi definido/incluso.*/


//Exercícios de escrita de código

//1
//a escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const outraPessoa = {
    nome: "Renata", 
    apelidos: ["Re", "Nata", "Natinha"]
}

function apresentacao(outraPessoa){
 console.log(`Eu sou ${outraPessoa.nome}, mas pode me chamar de ${outraPessoa.apelidos[0]}, ${outraPessoa.apelidos[1]}, ${outraPessoa.apelidos[2]}`)
}
apresentacao(outraPessoa)

//b usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos.
//Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novaPessoa = {
    ...outraPessoa,
    apelidos: ["Rezinha", "Renatinha", "Onça"]
}
apresentacao(novaPessoa)

//2
//a Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const sujeitoUm = {
    nome: "Lucas",
    idade: 27,
    profissao: "Preparador físico",
}

const sujeitoDois = {
    nome: "Renata",
    idade: 33,
    profissao: "Desenvolvedora backend",
}

//b
/*Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
1. O valor de nome
2. ****O numero de caracteres do valor nome****
3. O valor de idade
4.O valor de profissão
5.****O numero de caracteres do valor profissão**** */

function descricaoUm(sujeitoUm){
    const descricao = [`${sujeitoUm.nome}, ${sujeitoUm.nome.length}, ${sujeitoUm.idade}, ${sujeitoUm.profissao}, ${sujeitoUm.profissao.length}`]
    
    return descricao            
}
console.log(descricaoUm(sujeitoUm))

function descricaoDois(sujeitoDois){
    const descricao = [`${sujeitoDois.nome}, ${sujeitoDois.nome.length}, ${sujeitoDois.idade}, ${sujeitoDois.profissao}, ${sujeitoDois.profissao.length}`]

    return descricao
}
console.log(descricaoDois(sujeitoDois))

//3
//a Crie uma variável de escopo global que guarde um array vazio chamada carrinho
const carrinho = []

//b
const frutaUm = {
    nome: "Maçã",
    disponibilidade: true
}

const frutaDois = {
    nome: "Banana",
    disponibilidade: true
}

const frutaTres = {
    nome: "Laranja",
    disponibilidade: true
}

//c escreva função que receba um objeto fruta por parametro 
//e coloque dentro do array carrinho (push).
//invocar a função passando os tres objetos criados
function feira(fruta){
    const feira = carrinho.push(fruta)
    console.log(fruta)
    return feira
}

feira(frutaUm)
feira(frutaDois)
feira(frutaTres)

/* Acertei e nem entendi direito como*/

//d imprima a variavel carrinho e garanta que ela seja um array preenchido com 3 objetos
const carrinhoLista = {
    ...carrinho,
       
}
console.log(carrinho)