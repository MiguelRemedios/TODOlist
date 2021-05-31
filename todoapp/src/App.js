import React, { useState, useEffect } from "react";
import "./App.css";
//Components import
import Form from "./components/Form";
import List from "./components/List";

function App() {
  //states and set functions for the typed input as well as for the todos array
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [counterValue, setCounterValue] = useState(0);
  const [status, setStatus] = useState("all");
  const [filteredTODOS, setFilteredTODOS] = useState([]);

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

  //Function responsible of allowing to manange hook status when checkbox is clicked or not
  const statusHandler = (e) => {
    if (document.getElementById("filter").checked) {
      setStatus(e.target.value);
    } else {
      setStatus("all");
    }
  };

  //Function responsible for filtering the main TODOS array into a new array/ state that only contains the completed TODOS
  const filterHandler = () => {
    switch (status) {
      case "filter":
        setFilteredTODOS(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTODOS(todos);
        break;
    }
  };

  //Hook responsible for running the filteredHandler after the state rendering
  //meaning that whenver a state changes it runs the specific function
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="containerBtn">
        <h3 id="tag" onClick={sortList}>
          TASKS
        </h3>
        <button className="sort-btn" onClick={sortList}>
          <i className="fa fa-sort" aria-hidden="true"></i>
        </button>
      </div>
      <hr />
      <label id="label" className="label-container" htmlFor="filter">
        <input
          onChange={statusHandler}
          type="checkbox"
          id="filter"
          name="filter"
          value="filter"
          unchecked="true"
        />
        Hide Completed
      </label>
      <List
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        filteredTODOS={filteredTODOS}
      />
      <header />
    </div>
  );
}

export default App;
