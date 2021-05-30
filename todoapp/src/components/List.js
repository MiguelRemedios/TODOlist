import React from "react";
import Todo from "./Todo";

const List = (props) => {
  const { todos, setTodos, input, setInput } = props;

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
