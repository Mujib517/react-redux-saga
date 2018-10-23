import axios from 'axios';
import { put, call,all, takeLatest } from 'redux-saga/effects';

export function* createTodo(action) {
  try {
    yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', action.todo);
    yield put({ type: 'GET_TODOS' });
  }
  catch (e) {
    console.log("Create error", e);
  }
}

export function* getTodos() {
  try {
    const todos = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos')
    yield put({ type: 'GET_TODO_SUCCESS', todos });
  }
  catch (e) {
    console.log("Failed to get", e);
  }
}

export function* get() {
  yield takeLatest('GET_TODOS', getTodos)
}

export function* create() {
  yield takeLatest('CREATE_TODO', createTodo);
}

export default function* rootTodoSaga() {
  yield all([
    get(),
    create()
  ]);
}