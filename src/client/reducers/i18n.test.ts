import { reducer, initialState } from './i18n';
import * as actions from '../actions/i18n';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined } as any)).toEqual(initialState);
});

test('should handle SET_LANGUAGE', () => {
  expect(reducer(initialState, actions.setLanguage('en'))).toMatchSnapshot();
});
