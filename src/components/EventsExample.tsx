import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    //<Указывается для какого элемента событие изменения>
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    return(
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="управляемый"/>
            <input ref={inputRef} type="text" placeholder="неуправляемый"/>
            <button onClick={clickHandler}>button</button>
        </div>
    )
}

export default EventsExample