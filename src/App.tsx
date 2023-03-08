import React, { useState } from "react";
import { InputFeild } from "./components/InputFeild";
import "./App.css";
import { Todo } from "./model";
import TodoList from "./components/TodoList";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos((state:Todo[])=>[...state,{id:Date.now(),isDone:false,todo}])
      setTodo('')
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App