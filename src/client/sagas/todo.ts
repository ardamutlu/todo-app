import { END } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  getAllTodoRequest,
  getAllTodoSuccess,
  getAllTodoFailure,
  deleteTodoByIdRequest,
  deleteTodoByIdSuccess,
  deleteTodoByIdFailure,
  updateTodoStatusByIdRequest,
  updateTodoStatusByIdSuccess,
  updateTodoStatusByIdFailure,
  updateTodoByIdRequest,
  updateTodoByIdSuccess,
  updateTodoByIdFailure,
  addNewTodoRequest,
  addNewTodoSuccess,
  addNewTodoFailure,
  GET_ALL_TODO_REQUEST,
  DELETE_TODO_BY_ID_REQUEST,
  UPDATE_TODO_STATUS_BY_ID_REQUEST,
  UPDATE_TODO_BY_ID_REQUEST,
  ADD_NEW_TODO_REQUEST
} from '../actions/todo';
import { fetchMethod } from './fetchMethod';
import { ErrorNotification } from '../templates';

function* getAllTodo(actions: ReturnType<typeof getAllTodoRequest>) {
  const options = { method: 'GET' };

  try {
    // async

    const body = yield fetchMethod({
      path: `/`,
      options
    });

    yield put(getAllTodoSuccess(body));
  } catch (err) {
    yield put(getAllTodoFailure(err));
  } finally {
    if (!process.env.IS_BROWSER) {
      yield call(stopSaga);
    }
  }
}

function* deleteTodoById(actions: ReturnType<typeof deleteTodoByIdRequest>) {
  const options = { method: 'DELETE' };

  try {
    // async

    const body = yield fetchMethod({
      path: `/${actions.payload}`,
      options
    });

    if (body.error) {
      yield call(ErrorNotification, 'error', body.message);
      yield put(deleteTodoByIdFailure(body));

      return;
    }

    yield put(deleteTodoByIdSuccess(body));
    yield call(ErrorNotification, 'success', 'Todo deleted successfully.');
  } catch (err) {
    yield put(deleteTodoByIdFailure(err));
  } finally {
    if (!process.env.IS_BROWSER) {
      yield call(stopSaga);
    }
  }
}

function* updateTodoStatusById(actions: ReturnType<typeof updateTodoStatusByIdRequest>) {
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      Object.assign({}, actions.payload, { complete: !actions.payload.complete })
    )
  };

  try {
    // async

    const body = yield fetchMethod({
      path: `/${actions.payload.id}`,
      options
    });

    if (body.error) {
      yield call(ErrorNotification, 'error', body.message);
      yield put(updateTodoStatusByIdFailure(body));

      return;
    }

    yield put(updateTodoStatusByIdSuccess(body));
    yield call(ErrorNotification, 'success', 'Status changed successfully.');
  } catch (err) {
    yield put(updateTodoStatusByIdFailure(err));
  } finally {
    if (!process.env.IS_BROWSER) {
      yield call(stopSaga);
    }
  }
}

function* updateTodoById(actions: ReturnType<typeof updateTodoByIdRequest>) {
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(actions.payload)
  };

  try {
    // async

    const body = yield fetchMethod({
      path: `/${actions.payload.id}`,
      options
    });

    if (body.error) {
      yield call(ErrorNotification, 'error', body.message);
      yield put(updateTodoByIdFailure(body));
      return;
    }

    yield put(updateTodoByIdSuccess(body));
    yield call(ErrorNotification, 'success', 'Todo updated successfully.');
  } catch (err) {
    yield put(updateTodoByIdFailure(err));
  } finally {
    if (!process.env.IS_BROWSER) {
      yield call(stopSaga);
    }
  }
}

function* addNewTodo(actions: ReturnType<typeof addNewTodoRequest>) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(actions.payload)
  };

  try {
    // async

    const body = yield fetchMethod({
      path: `/`,
      options
    });

    if (body.error) {
      yield call(ErrorNotification, 'error', body.message);
      yield put(addNewTodoFailure(body));
      return;
    }

    yield put(addNewTodoSuccess(body));
    yield call(ErrorNotification, 'success', 'Todo created successfully.');
  } catch (err) {
    yield put(addNewTodoFailure(err));
  } finally {
    if (!process.env.IS_BROWSER) {
      yield call(stopSaga);
    }
  }
}

function* stopSaga() {
  yield put(END);
}

export function* todoProcess() {
  yield takeLatest(GET_ALL_TODO_REQUEST, getAllTodo);
  yield takeLatest(DELETE_TODO_BY_ID_REQUEST, deleteTodoById);
  yield takeLatest(UPDATE_TODO_STATUS_BY_ID_REQUEST, updateTodoStatusById);
  yield takeLatest(UPDATE_TODO_BY_ID_REQUEST, updateTodoById);
  yield takeLatest(ADD_NEW_TODO_REQUEST, addNewTodo);
}
