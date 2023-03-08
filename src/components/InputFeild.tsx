import React, { useRef } from 'react'

import './styles.css'

interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}

export const InputFeild: React.FC<props> = ({ todo, setTodo ,handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null)



    return (
        <form className='input' onSubmit={e=>{
            handleAdd(e)
            inputRef.current?.blur()
        }}>
            <input type="input" placeholder='Enter Task'
                ref={inputRef}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className='input__box'
            />
            <button className='input_submit' type='submit'>Go</button>
        </form>
    )
}
