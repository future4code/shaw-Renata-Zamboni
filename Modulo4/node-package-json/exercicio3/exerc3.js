const tarefas = [
    "Organizar meus horários",
    "Fazer uma coisa de cada vez",    
    "Me exercitar",
    "Ler"
]

//const adicionaTarefa = tarefas.push.process.argv[2]
const adicionaTarefa = process.argv[2]
tarefas.push(adicionaTarefa)

console.log(`A tarefa "${adicionaTarefa}" foi adicionada com sucesso a lista`)
console.log(tarefas)
