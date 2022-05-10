import React, { FC, useState, useEffect } from "react";
import { ITodo } from "../types/types";
import axios from 'axios';
import List from './List';
import TodoItem from './TodoItem'

const TodosPage: FC = () => {
    //<Указываем тип>
    const [todos, setTodos] = useState<ITodo[]>([])

    //Для ассинхронного запроса с сервера используем hook, чтобы при загрузке сразу пользователей получить
    useEffect(() => {
        fetchTodos()
    }, [])

    //Получение дел
    async function fetchTodos(){
        try{
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        //То что мы получили от сервера, нам надо поместить в состояние
        setTodos(response.data)
        }catch(e){
        alert(e)
        }
    }

    return(
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    )
}

export default TodosPage