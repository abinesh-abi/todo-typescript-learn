import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { GrEdit } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

// we can also use interface

type props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text single__input"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon text-blue"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          {<GrEdit />}
        </span>
        <span className="icon text-red" onClick={() => handleDelete(todo.id)}>
          {<FaTrashAlt />}
        </span>
        <span className="icon text-green" onClick={() => handleDone(todo.id)}>
          {<GiCheckMark />}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
