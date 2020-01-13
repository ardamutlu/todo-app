import { Actions } from '../actions/app';

export type State = {
  isMobile: boolean;
};

export const initialState: State = {
  isMobile: false
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case 'SET_IS_MOBILE':
      return { ...state, isMobile: action.payload.isMobile };
    default:
      return state;
  }
};
