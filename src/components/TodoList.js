import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  // console.log(props.filteredTodo);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodo.map(
          (todo) => {
            return (
              <Todo
                InputText={props.InputText}
                setInputText={props.setInputText}
                key={todo.id}
                todo={todo}
                todos={props.todos}
                setTodo={props.setTodo}
                text={todo.Text}
              />
            );
          }
          // console.log(todo.Text);
        )}
      </ul>
    </div>
  );
};

export default TodoList;
