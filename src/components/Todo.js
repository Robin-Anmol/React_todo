import React from "react";

const Todo = ({ setInputText, text, todo, todos, setTodo }) => {
  const deleteHandler = () => {
    setTodo(todos.filter((el) => el.id !== todo.id));
  };
  const EditHandler = () => {
    setTodo(
      todos.map((el) => {
        if (el.id === todo.id) {
          setInputText(el.Text);
        }
        return el;
      })
    );
    setTodo(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            Completed: !item.Completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <li className={`todo-item ${todo.Completed ? "completed" : " "}`}>
        {" "}
        {text}{" "}
      </li>
      <button onClick={EditHandler} className="edit-btn complete-btn">
        <i className="fas fa-edit"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
