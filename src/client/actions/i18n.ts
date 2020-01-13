import { State } from '../reducers/i18n';

export type Actions = ReturnType<typeof setLanguage>;

export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = (lang: State['lang']) =>
  ({
    type: SET_LANGUAGE,
    payload: {
      lang
    }
  } as const);
