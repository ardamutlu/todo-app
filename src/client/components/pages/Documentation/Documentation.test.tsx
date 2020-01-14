import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Documentation from '.';
import { initialState } from '../../../reducers';
import * as actions from '../../../actions/pages';
import createComponentWithIntl from '../../../utils/createComponentWithIntl';

test('should call loadDocumentationPage via useDispatch', () => {
  const loadDocumentationPage = jest.spyOn(actions, 'loadDocumentationPage');
  const mockStore = configureStore()(initialState);
  const component = createComponentWithIntl(<Documentation />);

  render(<Provider store={mockStore}>{component}</Provider>);

  expect(loadDocumentationPage).toBeCalled();
});
