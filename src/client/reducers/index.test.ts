import { createStore } from 'redux';
import { rootReducer } from '.';
import { reducer as pagesReducer } from './pages';

const store = createStore(rootReducer);

test('should return rootReducer', () => {
  expect(store.getState().pages).toEqual(pagesReducer(undefined, { type: undefined } as any));
});
