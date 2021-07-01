import React from "react";

function Todo({ todo, onToggle, onRemove }) {
  const { id, task, check } = todo;

  return (
    <div>
      o
      &nbsp;&nbsp;&nbsp;
      <span
        onClick={() => onToggle(id)}
        style={{
          textDecoration: check ? "none" : "line-through",
        }}
      >
        {task}
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="remove" onClick={() => onRemove(id)}>
        X
      </button>
    </div>
  );
}

function TodoList({ todos, onToggle, onRemove }) {
  console.log(todos);
  return (
    <div>
      {todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
