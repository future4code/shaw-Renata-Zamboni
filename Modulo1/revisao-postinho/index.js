
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
//console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a===b}`
}
//console.log(checarIgualdade(1, 3));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a,b){
    return `${a} é maior que ${b}? ${a>b}`
}
//console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= undefined
// e-) 0!==null = false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
const cadastro = () => {
    const usuario = []

    const nomeDoUsuario = prompt("Qual seu nome?")
    let anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
    const nacionalidade = prompt("Qual a sua nacionalidade?")
    const senhaDoUsuario = prompt("Qual a sua senha?")
    let idadeUsuario = 2022 - anoDeNascimento

    const usuarioCadastrado = {
        nome: nomeDoUsuario,
        idade: idadeUsuario,
        nacionalidade: nacionalidade.toLowerCase(),
        senha: senhaDoUsuario,
    }
    
    usuario.push(usuarioCadastrado)
                  
   if(idadeUsuario >=18 && usuarioCadastrado.nacionalidade === "brasileira" && senhaDoUsuario.length >=6){
        console.log("Você pode se cadastrar")
    } else{
        console.log("Você não cumpre com os requisitos de cadastro")
    }
   
   return usuario
}

//console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------
const login = () => {
    const login = "labenu"
    
    //const senhaUsuario = prompt("Digite sua senha")

    if(senhaUsuario === login){
            return "Usuário Logado"
        }else{
            return "Senha inválida"
        } 
    
}

//console.log(login())

// Exercício 5----------------------------------------------------------------------------------------------------
const nomeVacinado = prompt("Digite seu nome")
const vacina = prompt("Qual vacina você tomou?")
let data = ""
let tempo = ""

const primeiraDose = () => {
          
     
    if(vacina === "Coronavac"){
        return `Olá, ${nomeVacinado}! A próxima dose da ${vacina} é daqui a ${tempo = "28"} dias. Compareça no posto em ${data = "01/08/2021"}.`
    } else if(vacina === "Astrezenica"){
        return `Olá ${nomeVacinado}! A próxima dose da ${vacina} é daqui a ${tempo = "90"} dias. Compareça no posto em ${data = "20/10/2021"}.`
    }else if(vacina === "Pfizer"){
        return `Olá ${nomeVacinado}! A próxima dose da ${vacina} é daqui a ${tempo = "90"} dias. Compareça no posto em ${data = "20/10/2021"}.`
    }
    
}
console.log(primeiraDose())

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for(let usuario of usuarios){
        if(usuario.nome===nomeDoUsuario){
            usuario.imunizacao ="completa"
        }

    }
    return usuarios


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for(let usuario of usuarios){
        if(usuario.imunizacao === "incompleta"){
            console.log(`Olá, ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)

            //Pq usando return no lugar de console.log só imprime o Artur e usando o console.log imprime a lista toda e não só os com vacinação incompleta? E pq com console.log abaixo do if o "console.log(avisoAosAtrasados());" aparece como undefined? 
        }
    }
    
}
console.log(avisoAosAtrasados());

/*
// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
//console.log(avisoAosAtrasadosDesafio());*/