import React from "react";
import Todo from "./Todo";

const List = () => {
  return (
    <div className="container">
      <ul className="list">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );
};

export default List;
