import React from "react";

const Form = (props) => {
  const InputTextHandler = (e) => {
    // console.log(e.target.value);
    props.setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (props.InputText !== "") {
      props.setTodo([
        ...props.todos,
        { Text: props.InputText, Completed: false, id: Math.random() * 1000 },
      ]);
    }

    props.setInputText("");
  };
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form>
      <div>
        <input
          placeholder="Add your task ..."
          value={props.InputText}
          onChange={InputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
