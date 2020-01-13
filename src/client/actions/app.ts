import { State } from '../reducers/pages';

export type Actions = ReturnType<typeof setIsMobile>;

export const SET_IS_MOBILE = 'SET_IS_MOBILE';
export const setIsMobile = (isMobile: State['isMobile']) =>
  ({
    type: SET_IS_MOBILE,
    payload: {
      isMobile
    }
  } as const);
