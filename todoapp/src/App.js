import React, { useState } from "react";
import "./App.css";
//Components import
import Form from "./components/Form";
import List from "./components/List";

function App() {
  //states and set functions for the typed input as well as for the todos array
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header />
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} />
    </div>
  );
}

export default App;
