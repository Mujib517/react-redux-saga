export function addTodo(todo) {
  return { type: 'CREATE_TODO', todo };
}

export function getTodo() {
  return { type: "GET_TODOS" };
}

export function getTodoSuccess() {
  return { type: "GET_TODO_SUCCESS" };
}