import React from "react";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  const { input, setInput, todos, setTodos } = props;
  const inputHandler = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  const submitTODOHandler = (e) => {
    e.preventDefault();

    const UUID = uuidv4();
    setTodos([...todos, { id: UUID, text: input, completed: false }]);
    setInput("");
  };

  return (
    <form>
      <input
        onChange={inputHandler}
        value={input}
        id="input"
        type="text"
        placeholder="Add a task to your list"
        className="todo-input"
      />
      <button
        id="btn"
        className="todo-button"
        type="submit"
        onClick={submitTODOHandler}
      >
        <i className="fa fa-plus-circle"></i>
      </button>
    </form>
  );
}

export default Form;
