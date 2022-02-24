//Exercícios de interpretação de códigos

/* 1

let array
console.log('a. ', array)
//indefinido

array = null
console.log('b. ', array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11

let i = 0
console.log('d. ', array[i])
//3

array[i+1] = 19
console.log('e. ', array)
//3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor)
//9
*/

/*2

const frase = prompt("Digite uma frase")
console.log(frase.toUppercase().replaceAll("A","I"), frase.length)
Subi num ônibus em Marrocos
//SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/


//Exercícios de escrita de código

//1

//a
const nomeUsuario = prompt("Qual seu nome?")
const emailUsuario = prompt("Informe seu e-mail.")

console.log("O e-mail", emailUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeUsuario)

//b
const nomeUsuario = prompt("Qual seu nome?")
const emailUsuario = prompt("Informe seu e-mail.")
const frase = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vinda(o) ${nomeUsuario}`

console.log(frase)

//c
const nomeUsuario = prompt("Qual seu nome?")
const emailUsuario = prompt("Informe seu e-mail.")
const mensagem = "O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem vinda(o) " + nomeUsuario;

console.log(mensagem)

//Dos métodos que criam uma variavel separada pra mensagem do console, eu preferi a Template String.



//2
//a
const comidasPreferidas = ["Purê de batata", "Abóbora Assada", "Polenta", "Pão de alho", "Bolo de maçã"]
console.log(comidasPreferidas)
const mensagem = `Essas são as minhas comidas preferidas: ${comidasPreferidas}`
console.log(mensagem)

//b
const mensagemLista = "Essas são minhas comidas preferidas:"
console.log(mensagemLista)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//c
/*Perguntar ao usuário uma comida preferida
Trocar a segunda comida da minha lista pela do usuário - comidaPref[1] = respPrompt
Imprimir no console a nova lista*/

const comidaUsuario = prompt("Me diga uma comida de sua preferência")
/* const listaNova = comidasPreferidas.replaceAll([1], comidaUsuario)
const listaNova = comidasPreferidas.replaceAll("Abóbora Assada", comidaUsuario)
Uncaught TypeError: comidasPreferidas.replaceAll is not a function*/

console.log(listaNova)


//3

//a
const listaDeTarefas = []
//b
const perguntaUm = prompt("Qual sua principal tarefa de manhã?")
const perguntaDois = prompt("Qual sua principal tarefa a tarde?")
const perguntaTres = prompt("Qual sua principal tarefa a noite?")
listaDeTarefas.push(perguntaUm , perguntaDois , perguntaTres)
//c
console.log(listaDeTarefas)