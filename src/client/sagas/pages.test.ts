import { END } from 'redux-saga';
import { expectSaga } from 'redux-saga-test-plan';
import { pagesProcess } from './pages';
import * as actions from '../actions/pages';
import { initialState } from '../reducers/pages';

describe('LOAD_APP_PROCESS', () => {
  test('should call LOAD_APP_PROCESS_SUCCESS action', () => {
    return expectSaga(pagesProcess)
      .withState(initialState)
      .put(actions.setEnv('test'))
      .put(actions.loadAppProcessSuccess())
      .dispatch(actions.loadAppProcess())
      .silentRun();
  });
});

describe('LOAD_HOME_PAGE', () => {
  test('should call LOAD_HOME_PAGE_SUCCESS with SSR', () => {
    return expectSaga(pagesProcess)
      .withState(initialState)
      .put(actions.loadHomePageSuccess())
      .put(END)
      .dispatch(actions.loadHomePage())
      .silentRun();
  });

  test('should call LOAD_HOME_PAGE_SUCCESS action with CSR', () => {
    process.env.IS_BROWSER = 'true';

    return expectSaga(pagesProcess)
      .withState(initialState)
      .put(actions.loadHomePageSuccess())
      .dispatch(actions.loadHomePage())
      .silentRun();
  });
});

describe('LOAD_DOCUMENTATION_PAGE', () => {
  test('should call LOAD_DOCUMENTATION_PAGE with SSR', () => {
    return expectSaga(pagesProcess)
      .withState(initialState)
      .put(actions.loadDocumentationPageSuccess())
      .put(END)
      .dispatch(actions.loadDocumentationPage())
      .silentRun();
  });

  test('should call LOAD_DOCUMENTATION_PAGE action with CSR', () => {
    process.env.IS_BROWSER = 'true';

    return expectSaga(pagesProcess)
      .withState(initialState)
      .put(actions.loadDocumentationPageSuccess())
      .dispatch(actions.loadDocumentationPage())
      .silentRun();
  });
});
