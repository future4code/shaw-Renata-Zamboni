//Exercícios de interpretação

//1
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },

    { nome: "Laís Petra", apelido: "Laura" },

    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

//a 
// item - valor do elemendo do array =  tudo oq está dentro daquela "celula": { nome: "Amanda Rangel", apelido: "Mandi" }
// index - valor do indice daquele elemento = a posição do elemento no array?: 0 de 3
// array - o proprio = [array{elemento}],  [{...}] //... notação de cópia? de mais conteúdo

// {"nome": "Amanda Rangel", "apelido": "Mandi"}, 0 (3) [{...}, {...}, {...}]
// {"nome": "Laís Petra", "apelido": "Laura" }, 1 (3) [{...}, {...}, {...}]
// {"nome": "Letícia Chijo", "apelido": "Chijo"}, 2 (3) [{...}, {...}, {...}]

//2
const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
 })
 
 console.log(novoArrayB)

//a
// nomes impressos no item
// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3
const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

// filtrar e mostrar os apelidos que não são "Chijo"?
//['Mandi', 'Laura']?
// Resp. [{...}],{...}] - Pq sem o apelido?

//Exercícios de escrita de código

//1
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

//a
const petsNome = pets.map((item, index, array) =>{
   return item.nome
})

console.log(petsNome)

//b
const petsRaca = pets.filter((item, index) =>{
   return item.raca === "Salsicha"
})

console.log(petsRaca)

//[{...}],{...}] - Pq não retorna a raça???
//Mesmo problema de E.Interpretação.3