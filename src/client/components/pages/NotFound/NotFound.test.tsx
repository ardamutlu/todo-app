import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NotFound from '.';
import { initialState } from '../../../reducers';
import * as actions from '../../../actions/pages';
import createComponentWithIntl from '../../../utils/createComponentWithIntl';

test('should call loadHomePage via useDispatch', () => {
  const loadHomePage = jest.spyOn(actions, 'loadHomePage');
  const mockStore = configureStore()(initialState);
  const component = createComponentWithIntl(<NotFound />);
  render(<Provider store={mockStore}>{component}</Provider>);

  expect(loadHomePage).toBeCalled();
});
