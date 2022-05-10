//Здесь мы будем описывать глобальные типы, которые будут использоваться в разных частях приложения

export interface IUser{
    id: number
    name: string
    email: string
    address: IAdderess
}

export interface IAdderess{
    street: string
    city: string
    zipcode: string
}

export interface ITodo{
    id: number
    title: string
    completed: boolean
}