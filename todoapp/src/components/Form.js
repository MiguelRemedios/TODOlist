import React from "react";

function Form() {
  return (
    <form>
      <input
        id="input"
        type="text"
        placeholder="Add a task to your list"
        className="todo-input"
      />
      <button id="btn" className="todo-button" type="submit">
        <i className="fa fa-plus-circle"></i>
      </button>
    </form>
  );
}

export default Form;
