import React, {FC, useState} from 'react';

export enum CardVariant{
    outlined = 'outlined',
    primary = 'primary'
}

//Опишем, какие пропсы будет ожидать наш компонент
//Чтобы сделать их необязательными ставим - '?'
interface CardProps{
    width?: string
    height?: string
    variant: CardVariant
    children?: React.ReactChild | React.ReactNode
}

// Тип нашего компонента
const Card: FC<CardProps> = 
    ({
        width, 
        height, 
        variant, 
        children
    }) => {
    const [state, setState] = useState(0)
    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined? '1px solid gray' : 'none',
            background: variant === CardVariant.primary? 'lightgray' : ''
        }}
        >
            {children}
        </div>
    )
}

export default Card;