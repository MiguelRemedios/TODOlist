import React, { useState } from "react";
import "./App.css";
//Components import
import Form from "./components/Form";
import List from "./components/List";

function App() {
  //states and set functions for the typed input as well as for the todos array
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [counterValue, setCounterValue] = useState(0);

  //Function that sorts the elements/TODOS text property in descending alphabetical order (A-Z)
  const sortList = () => {
    if (counterValue === 0) {
      //Function that sorts the elements/TODOS text property in ascending alphabetical order (A-Z)
      const sortedTODOSAsc = todos.sort((a, b) => (a.text > b.text ? 1 : -1));
      setTodos(sortedTODOSAsc);
      setCounterValue(1);
    } else if (counterValue === 1) {
      //Function that sorts the elements/TODOS text property in ascending alphabetical order (A-Z)
      const sortedTODOSDesc = todos.sort((a, b) => (a.text < b.text ? 1 : -1));
      setTodos(sortedTODOSDesc);
      setCounterValue(2);
    } else if (counterValue === 2) {
      //Function that sorts the elements/TODOS text property back to its original (creation date time) queue
      window.location.reload();
    }
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
        <button onClick={sortList}>Sort list</button>
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
