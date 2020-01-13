import { combineReducers } from 'redux';
import { reducer as appReducer, initialState as appInitialState, State as AppState } from './app';
import {
  reducer as pagesReducer,
  initialState as pagesInitialState,
  State as PagesState
} from './pages';
import {
  reducer as i18nReducer,
  initialState as i18nInitialState,
  State as i18nState
} from './i18n';
import {
  reducer as todoReducer,
  initialState as todoInitialState,
  State as todoState
} from './todo';

export type State = {
  app: AppState;
  pages: PagesState;
  i18n: i18nState;
  todo: todoState;
};

export const initialState: State = {
  app: appInitialState,
  pages: pagesInitialState,
  i18n: i18nInitialState,
  todo: todoInitialState
};

export const rootReducer = combineReducers({
  app: appReducer,
  pages: pagesReducer,
  i18n: i18nReducer,
  todo: todoReducer
});
