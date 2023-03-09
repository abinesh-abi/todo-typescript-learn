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

  const handleDone = (id:number)=>{
    setTodos(todos.map(todo=>todo.id === id ?{...todo,isDone:!todo.isDone}:todo))
  }
  const handleDelete = (id:number)=>{
    setTodos(todos.filter(todo=>todo.id !== id ))
  }

  return (
    <form className='todos__single'>
      {
        todo.isDone?
        <s className="todos__single--text">{todo.todo}</s>
        :
        <span className="todos__single--text">{todo.todo}</span>

      }
        <div>
            <span className="icon">{<GrEdit />}</span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>{<FaTrashAlt />}</span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>{<GiCheckMark />}</span>

        </div>

    </form>
  )
}

export default SingleTodo