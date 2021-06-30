const ADD_TODO = "todos/ADD_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
});
