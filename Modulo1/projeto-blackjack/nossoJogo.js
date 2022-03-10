//1.
console.log("Boas vindas ao jogo Blackjack!")
//2, 3 e 4

if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok" - iniciar nova rodada
} else { console.log("O jogo acabou.")
	// o que fazer se o usuário clicar "cancelar"
}

//5. 
//Começar uma rodada
// Sortear 2 cartas pra cada jogador
const cartaUmPlayerUm = comprarCarta()
const cartaDoisPlayerUm = comprarCarta()
const cartaUmPlayerDois = comprarCarta()
const cartaDoisPlayerDois = comprarCarta()

//definir a pontuação de cada jogador
const pontuacaoPlayerUm = cartaUmPlayerUm.valor + cartaDoisPlayerUm.valor
const pontuacaoPlayerDois = cartaUmPlayerDois.valor + cartaDoisPlayerDois.valor

//6.
//mostrar, no console, as cartas e pontuação de cada jogador
console.log( "As cartas do Usuário foram:",  cartaUmPlayerUm.texto, cartaDoisPlayerUm.texto, "e sua pontuação foi:",  pontuacaoPlayerUm)
console.log( "As cartas do Computador foram:",  cartaUmPlayerDois.texto, cartaDoisPlayerDois.texto, "e sua pontuação foi:",  pontuacaoPlayerDois)

//7.
//indicar o vencedor ou um empate
if(pontuacaoPlayerUm > pontuacaoPlayerDois){
   console.log("O Usuário venceu")
 } else if(pontuacaoPlayerDois > pontuacaoPlayerUm){
   console.log("O Computador venceu")
 }else{
   console.log("Empate!")
 }
 
