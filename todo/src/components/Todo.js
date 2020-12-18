import React from "react";

const Todo = (props) => {
  return (
    <div
    //   className={`item${props.todo.completed ? " completed" : ""}`}
    //   onClick={() => props.toggleTodo(props.todo.id)}
    >
      <h1>{props.todo.item}</h1>
    </div>
  );
};

export default Todo;
