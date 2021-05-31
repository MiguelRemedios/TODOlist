import React, { useState } from "react";

const Todo = (props) => {
  //Props destructuring
  const { todoText, todos, setTodos, todo } = props;

  //state that will store the ID that will be edited
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingTODO, setEditingTODO] = useState("");

  //Event Handlers
  //Function that handles the deletion of the pretended element when clicked
  const deleteTODOHandler = () => {
    setTodos(todos.filter((currentTodo) => currentTodo.id !== todo.id));
  };

  //Function that handles the business logic of the editing TODO feature
  const editTODOHandler = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingTODO;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingTODO("");
  };

  //Function that handles the state of the TODO meaning that it can change between
  //completed or not completed, if so, then UPDATE the UI
  const completeTODOHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) return { ...item, completed: !item.completed };
        return item;
      })
    );
  };

  return (
    <>
      <div className="todo">
        <button className="complete-btn" onClick={completeTODOHandler}>
          <i className="fas fa-check"></i>
        </button>

        {todoEditing === todo.id ? (
          <input
            id="editInput"
            onChange={(e) => setEditingTODO(e.target.value)}
            value={editingTODO}
            type="text"
            placeholder="Edit your task"
            className="todo-input"
          />
        ) : (
          <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {todoText}
          </li>
        )}

        {todoEditing === todo.id ? (
          <button className="edit-btn" onClick={() => editTODOHandler(todo.id)}>
            <i className="fas fa-edit"></i>
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setTodoEditing(todo.id)}>
            <i className="fas fa-edit"></i>
          </button>
        )}

        <button className="delete-btn" onClick={deleteTODOHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;
