//1
export type Usuario = {
    userId: number,
    nome: string,
    cpf: number,
    nascimento: number
}

//2
export const usuarios: Usuario[] = [
    {
        userId: 1,
        nome: "Primeiro",
        cpf: 1,
        nascimento: 1-1-2000
    }
]

//3
export type Extrato = {
    userId: number,
    valor: number,
    data: number,
    descritivo: string,
}

//4 - Dentro da definição do usuário (?), crie um array que armazene as transações de um cliente.
export const extratos: Extrato[] = []