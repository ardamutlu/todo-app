import { reducer, initialState } from './pages';
import * as actions from '../actions/pages';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined } as any)).toEqual(initialState);
});

test('should handle RESET_PAGES_STATUS', () => {
  expect(
    reducer({ ...initialState, baseUrl: 'test' }, actions.resetPageStatus())
  ).toMatchSnapshot();
});

test('should handle SET_ENV', () => {
  expect(reducer(initialState, actions.setEnv('test'))).toMatchSnapshot();
});

test('should handle SET_BASE_URL', () => {
  expect(reducer(initialState, actions.setBaseUrl('base-url'))).toMatchSnapshot();
});

test('should handle LOAD_HOME_PAGE', () => {
  expect(reducer(initialState, actions.loadHomePage())).toMatchSnapshot();
});

test('should handle LOAD_HOME_PAGE_SUCCESS', () => {
  expect(reducer(initialState, actions.loadHomePageSuccess())).toMatchSnapshot();
});

test('should handle LOAD_HOME_PAGE_FAILURE', () => {
  expect(reducer(initialState, actions.loadHomePageFailure(new Error('404')))).toMatchSnapshot();
});

test('should handle LOAD_DOCUMENTATION_PAGE', () => {
  expect(reducer(initialState, actions.loadDocumentationPage())).toMatchSnapshot();
});

test('should handle LOAD_DOCUMENTATION_PAGE_SUCCESS', () => {
  expect(reducer(initialState, actions.loadDocumentationPageSuccess())).toMatchSnapshot();
});

test('should handle LOAD_DOCUMENTATION_PAGE_FAILURE', () => {
  expect(
    reducer(initialState, actions.loadDocumentationPageFailure(new Error('404')))
  ).toMatchSnapshot();
});
