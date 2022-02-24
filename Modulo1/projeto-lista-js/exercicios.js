// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
 const areaRetangulo = altura*largura

 console.log(areaRetangulo)

 return areaRetangulo

}

calculaAreaRetangulo(3, 5)
calculaAreaRetangulo(2, 6)

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Em qual ano você nasceu?")
  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso/(altura*altura)
  return imc 

}
calculaIMC(85, 1.8)
calculaIMC(70, 1.65)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corUm = prompt("Qual sua cor favorita?")
  const corDois = prompt("Escolha outra cor.")
  const corTres = prompt("Escolha uma terceira cor.")
  const listaCores = [corUm, corDois, corTres]

  console.log(listaCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const retorno = custo/valorIngresso
  return retorno

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho = string1 >= string2
  return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  //const tamanhoArray = array.lenght()
  const ultimoElemento = array.pop()
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  //const primeiroElemento = array[0]
  const ultimoElemento = array.pop()
  const troca = array.replaceAll([0], ultimoElemento)
  return troca
 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}