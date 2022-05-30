//a) usamos a propriedade process.argv com indice [2] ou maior para acessar valores passados no terminal.

//b)
const meuNome = process.argv[2]
const minhaIdade = Number(process.argv[3])
const somaSete = minhaIdade + 7

console.log(`Olá, ${meuNome}! Você tem ${minhaIdade} anos.`)

//c)
console.log(`Olá, ${meuNome}! Você tem ${minhaIdade} anos. Em sete anos você terá ${somaSete}.`)


