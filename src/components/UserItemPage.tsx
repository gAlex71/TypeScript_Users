import React, { FC, useState, useEffect } from "react";
import { IUser } from '../types/types';
import axios from 'axios';
import List from './List';
import UserItem from './UserItem';
import { useParams, useNavigate} from "react-router-dom";

interface UserItemPageParams{
    id: string
    [index: string]: string;
}

const UserItemPage: FC = () => {
    //<Указываем тип>
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate()

    //Для ассинхронного запроса с сервера используем hook, чтобы при загрузке сразу пользователей получить
    useEffect(() => {
        fetchUser()
    }, [])

    //Получение пользователей
    async function fetchUser(){
        try{
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        //То что мы получили от сервера, нам надо поместить в состояние
        setUser(response.data)
        }catch(e){
        alert(e)
        }
    }

    return(
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage