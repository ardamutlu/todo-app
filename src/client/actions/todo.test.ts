import * as actions from './todo';

test('should create an action to get all todo', () => {
  expect(actions.getAllTodoRequest()).toMatchSnapshot();
});

test('should create a success action to get all todo', () => {
  expect(actions.getAllTodoSuccess([])).toMatchSnapshot();
});

test('should create a failure action to get all', () => {
  expect(actions.getAllTodoFailure(new Error())).toMatchSnapshot();
});

test('should create an action to delete todo by id', () => {
  expect(actions.deleteTodoByIdRequest(0)).toMatchSnapshot();
});

test('should create a success action to delete todo by id', () => {
  expect(actions.deleteTodoByIdSuccess([])).toMatchSnapshot();
});

test('should create a failure action to delete todo by id', () => {
  expect(actions.deleteTodoByIdFailure(new Error())).toMatchSnapshot();
});

test('should create an action to update todo status by id', () => {
  expect(actions.updateTodoStatusByIdRequest({})).toMatchSnapshot();
});

test('should create a success action to update todo status by id', () => {
  expect(actions.updateTodoStatusByIdSuccess([])).toMatchSnapshot();
});

test('should create a failure action to update todo status by id', () => {
  expect(actions.updateTodoStatusByIdFailure(new Error())).toMatchSnapshot();
});

test('should create an action to add new todo', () => {
  expect(actions.addNewTodoRequest({})).toMatchSnapshot();
});

test('should create a success action to add new todo', () => {
  expect(actions.addNewTodoSuccess([])).toMatchSnapshot();
});

test('should create a failure action to add new todo', () => {
  expect(actions.addNewTodoFailure(new Error())).toMatchSnapshot();
});

test('should create an action to update todo by id', () => {
  expect(actions.updateTodoStatusByIdRequest({})).toMatchSnapshot();
});

test('should create a success action to update todo by id', () => {
  expect(actions.updateTodoStatusByIdSuccess([])).toMatchSnapshot();
});

test('should create a failure action to update todo by id', () => {
  expect(actions.updateTodoStatusByIdFailure(new Error())).toMatchSnapshot();
});

test('should create a action to filter todo', () => {
  expect(actions.filterTodo({})).toMatchSnapshot();
});

test('should create a action to search todo', () => {
  expect(actions.searchTodo('')).toMatchSnapshot();
});
