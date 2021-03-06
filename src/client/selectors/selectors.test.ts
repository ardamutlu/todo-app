import { createStore } from 'redux';
import * as selectors from './';
import { rootReducer } from '../reducers';

test('should return base-url', () => {
  const storeState = createStore(rootReducer).getState();

  expect(selectors.getBaseUrl(storeState)).toMatchSnapshot();
});
