import * as Actions from '../actions/i18n';

export type State = {
  lang: string;
};

export const initialState: State = {
  lang: 'en'
};

export const reducer = (state: State = initialState, action: Actions.Actions): State => {
  switch (action.type) {
    case Actions.SET_LANGUAGE:
      localStorage.setItem('lang', action.payload.lang);
      return { ...state, lang: action.payload.lang };

    default:
      return state;
  }
};
