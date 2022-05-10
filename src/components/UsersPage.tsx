import React, { FC, useState, useEffect } from "react";
import { IUser } from '../types/types';
import axios from 'axios';
import List from './List';
import UserItem from './UserItem';
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
    //<Указываем тип>
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

    //Для ассинхронного запроса с сервера используем hook, чтобы при загрузке сразу пользователей получить
    useEffect(() => {
        fetchUsers()
    }, [])

    //Получение пользователей
    async function fetchUsers(){
        try{
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        //То что мы получили от сервера, нам надо поместить в состояние
        setUsers(response.data)
        }catch(e){
        alert(e)
        }
    }

    return(
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id}/>}
        />
    )
}

export default UsersPage