import { State } from '../reducers/pages';

export type Actions =
  | ReturnType<typeof setEnv>
  | ReturnType<typeof setIsMobile>
  | ReturnType<typeof setBaseUrl>
  | ReturnType<typeof resetPageStatus>
  | ReturnType<typeof loadAppProcess>
  | ReturnType<typeof loadAppProcessSuccess>
  | ReturnType<typeof loadAppProcessFailure>
  | ReturnType<typeof loadHomePage>
  | ReturnType<typeof loadHomePageSuccess>
  | ReturnType<typeof loadHomePageFailure>
  | ReturnType<typeof loadDocumentationPage>
  | ReturnType<typeof loadDocumentationPageSuccess>
  | ReturnType<typeof loadDocumentationPageFailure>;

export const SET_ENV = 'SET_ENV';
export const setEnv = (env: State['env']) =>
  ({
    type: SET_ENV,
    payload: {
      env
    }
  } as const);

export const SET_IS_MOBILE = 'SET_IS_MOBILE';
export const setIsMobile = (isMobile: State['isMobile']) =>
  ({
    type: SET_IS_MOBILE,
    payload: {
      isMobile
    }
  } as const);

export const SET_BASE_URL = 'SET_BASE_URL';
export const setBaseUrl = (baseUrl: State['baseUrl']) =>
  ({
    type: SET_BASE_URL,
    payload: {
      baseUrl
    }
  } as const);

export const RESET_PAGES_STATUS = 'RESET_PAGES_STATUS';
export const resetPageStatus = () =>
  ({
    type: RESET_PAGES_STATUS
  } as const);

export const LOAD_APP_PROCESS = 'LOAD_APP_PROCESS';
export const loadAppProcess = () =>
  ({
    type: LOAD_APP_PROCESS
  } as const);

export const LOAD_APP_PROCESS_SUCCESS = 'LOAD_APP_PROCESS_SUCCESS';
export const loadAppProcessSuccess = () =>
  ({
    type: LOAD_APP_PROCESS_SUCCESS
  } as const);

export const LOAD_APP_PROCESS_FAILURE = 'LOAD_APP_PROCESS_FAILURE';
export const loadAppProcessFailure = (err: Error) =>
  ({
    type: LOAD_APP_PROCESS_FAILURE,
    payload: {
      err
    }
  } as const);

export const LOAD_HOME_PAGE = 'LOAD_HOME_PAGE';
export const loadHomePage = () =>
  ({
    type: LOAD_HOME_PAGE
  } as const);

export const LOAD_HOME_PAGE_SUCCESS = 'LOAD_HOME_PAGE_SUCCESS';
export const loadHomePageSuccess = () =>
  ({
    type: LOAD_HOME_PAGE_SUCCESS
  } as const);

export const LOAD_HOME_PAGE_FAILURE = 'LOAD_HOME_PAGE_FAILURE';
export const loadHomePageFailure = (err: Error) =>
  ({
    type: LOAD_HOME_PAGE_FAILURE,
    payload: {
      err
    }
  } as const);

export const LOAD_DOCUMENTATION_PAGE = 'LOAD_DOCUMENTATION_PAGE';
export const loadDocumentationPage = () =>
  ({
    type: LOAD_DOCUMENTATION_PAGE
  } as const);

export const LOAD_DOCUMENTATION_PAGE_SUCCESS = 'LOAD_DOCUMENTATION_PAGE_SUCCESS';
export const loadDocumentationPageSuccess = () =>
  ({
    type: LOAD_DOCUMENTATION_PAGE_SUCCESS
  } as const);

export const LOAD_DOCUMENTATION_PAGE_FAILURE = 'LOAD_DOCUMENTATION_PAGE_FAILURE';
export const loadDocumentationPageFailure = (err: Error) =>
  ({
    type: LOAD_DOCUMENTATION_PAGE_FAILURE,
    payload: {
      err
    }
  } as const);
