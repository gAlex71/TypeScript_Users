import React, { FC } from "react";

// Может быть абсолютно любого типа('T')
interface ListProps<T>{
    items: T[]
    //Один конкретный элемент, который необходимо отрисовать
    renderItem: (item: T) => React.ReactNode
}

//Универсальный компонент, который будет являться списком, листом, для разных типов
export default function List<T>(props: ListProps<T>){

    return(
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}