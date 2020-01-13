import { END } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  setEnv,
  resetPageStatus,
  loadAppProcess as LoadAppProcess,
  loadAppProcessSuccess,
  loadHomePage as LoadHomePage,
  loadHomePageSuccess,
  loadDocumentationPage as LoadDocumentationPage,
  loadDocumentationPageSuccess,
  LOAD_APP_PROCESS,
  LOAD_HOME_PAGE,
  LOAD_DOCUMENTATION_PAGE
} from '../actions/pages';
import { getAllTodoRequest } from '../actions/todo';

// e.g. write common processing to be performed on all pages
// don't call `stopSaga`
function* appProcess(actions: ReturnType<typeof LoadAppProcess>) {
  yield put(setEnv(process.env.NODE_ENV || 'development'));
  yield put(loadAppProcessSuccess());
}

// if you run async process, you have to change the code like below
// function* appProcess(actions: ReturnType<typeof LoadAppProcess>) {
//   try {
//     // async

//     yield put(loadAppProcessSuccess());
//   } catch (err) {
//     yield put(loadAppProcessFailure(err));
//   } finally {
//     if (!process.env.IS_BROWSER) {
//       yield call(stopSaga);
//     }
//   }
// }

function* loadHomePage(actions: ReturnType<typeof LoadHomePage>) {
  yield changePage();
  // When homepage load get all todo's
  yield put(getAllTodoRequest());
  yield put(loadHomePageSuccess());

  if (!process.env.IS_BROWSER) {
    yield call(stopSaga);
  }
}

function* loadDocumentationPage(actions: ReturnType<typeof LoadDocumentationPage>) {
  yield changePage();
  yield put(loadDocumentationPageSuccess());
  if (!process.env.IS_BROWSER) {
    yield call(stopSaga);
  }
}

function* stopSaga() {
  yield put(END);
}

function* changePage() {
  // don't need to call resetPageStatus because baseUrl is required by fetch on Node.js environment,
  // also state has already been initialized at this time
  if (process.env.IS_BROWSER) {
    yield put(resetPageStatus());
  }
}

export function* pagesProcess() {
  yield takeLatest(LOAD_APP_PROCESS, appProcess);
  yield takeLatest(LOAD_HOME_PAGE, loadHomePage);
  yield takeLatest(LOAD_DOCUMENTATION_PAGE, loadDocumentationPage);
}
