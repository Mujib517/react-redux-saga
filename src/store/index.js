import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/todoSaga';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(sagas);
const action = type => store.dispatch({ type })
action("GET_TODOS");
export default store;