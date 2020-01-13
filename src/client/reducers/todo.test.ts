import { reducer, initialState } from './todo';
import * as actions from '../actions/todo';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined } as any)).toEqual(initialState);
});

test('should handle GET_ALL_TODO_REQUEST', () => {
  expect(reducer(initialState, actions.getAllTodoRequest())).toMatchSnapshot();
});
test('should handle GET_ALL_TODO_SUCCESS', () => {
  expect(reducer(initialState, actions.getAllTodoSuccess([]))).toMatchSnapshot();
});
test('should handle GET_ALL_TODO_FAILURE', () => {
  expect(reducer(initialState, actions.getAllTodoFailure(new Error('404')))).toMatchSnapshot();
});

test('should handle DELETE_TODO_BY_ID_REQUEST', () => {
  expect(reducer(initialState, actions.deleteTodoByIdRequest(0))).toMatchSnapshot();
});
test('should handle DELETE_TODO_BY_ID_SUCCESS', () => {
  expect(reducer(initialState, actions.deleteTodoByIdSuccess([]))).toMatchSnapshot();
});
test('should handle DELETE_TODO_BY_ID_FAILURE', () => {
  expect(reducer(initialState, actions.deleteTodoByIdFailure(new Error('404')))).toMatchSnapshot();
});

test('should handle UPDATE_TODO_STATUS_BY_ID_REQUEST', () => {
  expect(reducer(initialState, actions.updateTodoStatusByIdRequest({}))).toMatchSnapshot();
});
test('should handle UPDATE_TODO_STATUS_BY_ID_SUCCESS', () => {
  expect(reducer(initialState, actions.updateTodoStatusByIdSuccess([]))).toMatchSnapshot();
});
test('should handle UPDATE_TODO_STATUS_BY_ID_FAILURE', () => {
  expect(
    reducer(initialState, actions.updateTodoStatusByIdFailure(new Error('404')))
  ).toMatchSnapshot();
});

test('should handle ADD_NEW_TODO_REQUEST', () => {
  expect(reducer(initialState, actions.addNewTodoRequest({}))).toMatchSnapshot();
});
test('should handle ADD_NEW_TODO_SUCCESS', () => {
  expect(reducer(initialState, actions.addNewTodoSuccess([]))).toMatchSnapshot();
});
test('should handle ADD_NEW_TODO_FAILURE', () => {
  expect(reducer(initialState, actions.addNewTodoFailure(new Error('404')))).toMatchSnapshot();
});

test('should handle UPDATE_TODO_BY_ID_REQUEST', () => {
  expect(reducer(initialState, actions.updateTodoByIdRequest({}))).toMatchSnapshot();
});
test('should handle UPDATE_TODO_BY_ID_SUCCESS', () => {
  expect(reducer(initialState, actions.updateTodoByIdSuccess([]))).toMatchSnapshot();
});
test('should handle UPDATE_TODO_BY_ID_FAILURE', () => {
  expect(reducer(initialState, actions.updateTodoByIdFailure(new Error('404')))).toMatchSnapshot();
});

test('should handle FILTER_TODO', () => {
  expect(reducer(initialState, actions.filterTodo({}))).toMatchSnapshot();
});

test('should handle SEARCH_TODO', () => {
  expect(reducer(initialState, actions.searchTodo(''))).toMatchSnapshot();
});
