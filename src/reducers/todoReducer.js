
export default function todoReducer(state = [], action) {
  switch (action.type) {

    case 'CREATE_TODO':
      return [...state, Object.assign({}, action.todo)];
    case 'DELETE_TODO':
      return [...state, Object.assign({}, action.todo)];
    case 'GET_TODO_SUCCESS':
      console.log("reducer", action.todos.data);
      return action.todos.data;
    default:
      return [];
  }
}