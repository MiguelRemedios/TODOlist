import React, { useEffect } from "react";
import Todo from "./Todo";

const List = (props) => {
  const { todos, setTodos, input, setInput } = props;

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <div className="container">
      <ul className="list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todoText={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            input={input}
            setInput={setInput}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
