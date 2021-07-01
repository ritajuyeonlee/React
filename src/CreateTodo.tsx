import React from "react";

function CreateTodo({ task, onChange, onCreate }) {
  return (
    <div>
      <input
        className="input"
        name="task"
        placeholder="what to do?"
        value={task}
        onChange={onChange}
      />
      <button className="button" onClick={onCreate}>
        add
      </button>
    </div>
  );
}

export default CreateTodo;
