import * as actions from './pages';

test('should create an action to set a base-url', () => {
  expect(actions.setBaseUrl('url')).toMatchSnapshot();
});

test('should create an action to reset state', () => {
  expect(actions.resetPageStatus()).toMatchSnapshot();
});

test('should create an action to load app process', () => {
  expect(actions.loadAppProcess()).toMatchSnapshot();
});

test('should create a success action to load app process', () => {
  expect(actions.loadAppProcessSuccess()).toMatchSnapshot();
});

test('should create a failure action to load app process', () => {
  expect(actions.loadAppProcessFailure(new Error())).toMatchSnapshot();
});

test('should create an action to load Home page', () => {
  expect(actions.loadHomePage()).toMatchSnapshot();
});

test('should create a success action to load Home page', () => {
  expect(actions.loadHomePageSuccess()).toMatchSnapshot();
});

test('should create a failure action to load Home page', () => {
  expect(actions.loadHomePageFailure(new Error())).toMatchSnapshot();
});

test('should create an action to load Documentation page', () => {
  expect(actions.loadDocumentationPage()).toMatchSnapshot();
});

test('should create a success action to load Documentation page', () => {
  expect(actions.loadDocumentationPageSuccess()).toMatchSnapshot();
});

test('should create a failure action to load Documentation page', () => {
  expect(actions.loadDocumentationPageFailure(new Error())).toMatchSnapshot();
});
