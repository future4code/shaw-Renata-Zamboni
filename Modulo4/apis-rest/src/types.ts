export type User = {

    id: number,
    name: string,
    email: string,
    type: string,
    age: number,
    
}

export type NewUser = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

export enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}