import React, { useState } from "react";
import { InputFeild } from "./components/InputFeild";
import "./App.css";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((state: Todo[]) => [
        ...state,
        { id: Date.now(), isDone: false, todo },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      {/* <span className="heading">Taskify</span> */}
      <span className="heading">Todo</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.length !== 0 && <h2>Todos List</h2>}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
