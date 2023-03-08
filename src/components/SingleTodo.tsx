import React from 'react'
import { Todo } from '../model'
import {GrEdit} from 'react-icons/gr'
import { FaTrashAlt } from 'react-icons/fa'
import { GiCheckMark } from 'react-icons/gi'

// we can also use interface

type props ={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}:props) => {
  return (
    <form className='todos__single'>
        <span className="todos__single--text">{todo.todo}</span>
        <div>
            <span className="icon">{<GrEdit />}</span>
            <span className="icon">{<FaTrashAlt />}</span>
            <span className="icon">{<GiCheckMark />}</span>

        </div>

    </form>
  )
}

export default SingleTodo