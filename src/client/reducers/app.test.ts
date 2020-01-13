import { reducer, initialState } from './app';
import * as actions from '../actions/app';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined } as any)).toEqual(initialState);
});

test('should handle SET_IS_MOBILE', () => {
  expect(reducer(initialState, actions.setIsMobile(false))).toMatchSnapshot();
});
