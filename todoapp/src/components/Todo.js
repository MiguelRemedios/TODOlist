import React from "react";

const Todo = (props) => {
  const { todoText, todos, setTodos, todo, input, setInput } = props;

  //Event Handlers
  //Function that handles the deletion of the pretended element when clicked
  const deleteTODOHandler = () => {
    setTodos(todos.filter((currentTodo) => currentTodo.id !== todo.id));
  };

  const editTODOHandler = () => {
    const text = todo.text;
    setInput(text);
    const iconBtn = document.getElementById("submitIcon");
    iconBtn.className = "fas fa-edit";
  };

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
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {todoText}
        </li>
        <button className="edit-btn" onClick={editTODOHandler}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete-btn" onClick={deleteTODOHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;
