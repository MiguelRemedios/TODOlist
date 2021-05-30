import React from "react";
import "./App.css";
//Components import
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header />
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form />
      <List />
    </div>
  );
}

export default App;
