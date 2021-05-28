import React from 'react';


function Form() {
    return (
    <form>
      <input id="input" type="text" placeholder="add a task to your list" className="todo-input" />
      <button id="btn" className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    );
}

export default Form;
