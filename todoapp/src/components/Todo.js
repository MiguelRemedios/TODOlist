import React from "react";

const Todo = (props) => {
  const { todoText } = props;

  return (
    <>
      <div className="todo">
        <button className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <li className="todo-item">{todoText}</li>
        <button className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;
