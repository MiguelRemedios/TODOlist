import React, { useState } from "react";
import "./App.css";
//Components import
import Form from "./components/Form";
import List from "./components/List";

function App() {
  //states and set functions for the typed input as well as for the todos array
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const sortListAZ = (e) => {
    e.preventDefault();
    const sortedTODOS = todos.sort((a, b) => (a.text > b.text ? 1 : -1));
    setTodos(sortedTODOS);
  };

  return (
    <div className="App">
      <header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <h3 id="tag">TASKS</h3>
      <div className="containerBtn">
        <button onClick={sortListAZ}>Click to test</button>
      </div>
      <hr />
      <List
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
      <header />
    </div>
  );
}

export default App;
