import React from "react";

function Todo({ todo, onCheck, onRemove }) {
  const { id, task, check } = todo;
  return (
    <div>
      <input type="checkbox" onClick={() => onCheck(id)} value={check}></input>
      <span
        style={{
          textDecoration: check ? "none" : "line-through",
        }}
      >
        {task}
      </span>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
}

function TodoList({ todos, onCheck, onRemove }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} onCheck={onCheck} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TodoList;
