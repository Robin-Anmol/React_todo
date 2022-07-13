import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
const App = () => {
  const [InputText, setInputText] = useState("");

  const [todos, setTodo] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);
  //useEffect run every time when value change;
  useEffect(() => {
    FilteredHandler();
    saveToLocal();
  }, [todos, status]);

  const FilteredHandler = () => {
    switch (status) {
      case "completed":
        {
          setFilteredTodo(todos.filter((todo) => todo.Completed === true));
        }
        break;
      case "uncompleted":
        {
          setFilteredTodo(todos.filter((todo) => todo.Completed === false));
        }
        break;
      default: {
        setFilteredTodo(todos);
      }
    }
  };

  //setting up data into local storage

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App </h1>
      </header>
      <Form
        todos={todos}
        setTodo={setTodo}
        InputText={InputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        InputText={InputText}
        setInputText={setInputText}
        filteredTodo={filteredTodo}
        setTodo={setTodo}
        todos={todos}
      />
    </div>
  );
};

export default App;
