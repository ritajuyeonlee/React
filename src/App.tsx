import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const task = input;
  
  const getItem = window.localStorage.getItem("todos");
  const getId = window.localStorage.getItem("Id");

  const [todos, setTodos] = useState(
    () =>
    getItem != null ? JSON.parse(getItem) : []
  );

  const [nextId, setNextId] = useState(
    () =>
    getId != null ? JSON.parse(getId) : 0
  );
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    window.localStorage.setItem("Id",JSON.stringify(nextId));
  }, [nextId]);

  const onChange = e => {
    setInput(e.target.value);
  };

  const onCreate = () => {
    if (task !== "") {
      const todo = {
        id: nextId,
        task,
        check: true,
      };
      setTodos(todos.concat(todo));
      setInput("");
      setNextId(nextId + 1)
    }
  };

  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onFilter = filter => {
    setFilter(filter);
  };

  return (
    <div>
      <div className="inputbox">
        <CreateTodo task={task} onChange={onChange} onCreate={onCreate} />
      </div>
      <div className="listbox">
        <h1>TO DO LIST</h1>
        <TodoList
          todos={
            filter == null ? todos : todos.filter(todo => todo.check === filter)
          }
          onToggle={onToggle}
          onRemove={onRemove}
        />
      </div>
      <div className="buttonbox">
        <button className="button" onClick={() => onFilter(null)}>
          all
        </button>
        <button className="button" onClick={() => onFilter(true)}>
          active
        </button>
        <button className="button" onClick={() => onFilter(false)}>
          {" "}
          completed
        </button>
      </div>
    </div>
  );
}

export default App;
