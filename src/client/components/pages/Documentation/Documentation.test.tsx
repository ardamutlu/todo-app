import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Documentation from '.';
import { initialState } from '../../../reducers';
import * as actions from '../../../actions/pages';

test('should call loadDocumentationPage via useDispatch', () => {
  const loadDocumentationPage = jest.spyOn(actions, 'loadDocumentationPage');
  const mockStore = configureStore()(initialState);

  render(
    <Provider store={mockStore}>
      <Documentation />
    </Provider>
  );

  expect(loadDocumentationPage).toBeCalled();
});
