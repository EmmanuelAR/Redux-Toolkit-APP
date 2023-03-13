import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  console.log(todo);

  return (
    <>
      <h1>Todo RTK Query</h1>
      <hr />
      <h4>Is loading...{isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button>Next todo</button>
    </>
  );
};
