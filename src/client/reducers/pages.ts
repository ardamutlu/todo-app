import * as actions from '../actions/pages';

export type State = {
  isLoadingCompletion: boolean;
  error: Error | null;
  baseUrl: string;
  env: typeof process.env.NODE_ENV;
  isMobile: boolean;
};

export const initialState: State = {
  isLoadingCompletion: false,
  error: null,
  baseUrl: '',
  env: 'development',
  isMobile: false
};

export const reducer = (state: State = initialState, action: actions.Actions): State => {
  switch (action.type) {
    case actions.SET_ENV:
      return { ...state, env: action.payload.env };
    case actions.SET_IS_MOBILE:
      return { ...state, isMobile: action.payload.isMobile };
    case actions.RESET_PAGES_STATUS:
      return initialState;
    case actions.SET_BASE_URL:
      return { ...state, baseUrl: action.payload.baseUrl };
    case actions.LOAD_HOME_PAGE:
    case actions.LOAD_DOCUMENTATION_PAGE:
      return { ...state, isLoadingCompletion: false };
    case actions.LOAD_HOME_PAGE_SUCCESS:
    case actions.LOAD_DOCUMENTATION_PAGE_SUCCESS:
      return { ...state, isLoadingCompletion: true };
    case actions.LOAD_HOME_PAGE_FAILURE:
    case actions.LOAD_DOCUMENTATION_PAGE_FAILURE:
      return { ...state, isLoadingCompletion: true, error: action.payload.err };
    default:
      return state;
  }
};
