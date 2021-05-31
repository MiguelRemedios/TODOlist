import React, { useEffect } from "react";
import Todo from "./Todo";

const List = (props) => {
  //Props destructuring
  const { todos, setTodos, input, setInput, filteredTODOS } = props;

  //Loads TODOS that are stored inside the browser localstorage into the component LIST
  //allowing the current TODOs to not be lost
  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  //Sets an item into the browser localStorage that will store the array of objects (TODOS)
  //created by the user, allowing that, when the page is refresh the states won't be lost.
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <div className="container">
      <ul className="list">
        {filteredTODOS.map((todo) => (
          <Todo
            key={todo.id}
            todoText={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            input={input}
            setInput={setInput}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
