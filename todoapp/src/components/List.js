import React from "react";
import Todo from "./Todo";

const List = (props) => {
  const { todos } = props;

  return (
    <div className="container">
      <ul className="list">
        {todos.map((todo) => (
          <Todo key={todo.id} todoText={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default List;
