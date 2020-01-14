import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '.';
import { initialState } from '../../../reducers';
import * as actions from '../../../actions/pages';
import { IntlProvider } from 'react-intl';

test('should call loadHomePage via useDispatch', () => {
  const loadHomePage = jest.spyOn(actions, 'loadHomePage');
  const mockStore = configureStore()(initialState);

  render(
    <Provider store={mockStore}>
      <IntlProvider locale="en">
        <Home />
      </IntlProvider>
    </Provider>
  );

  expect(loadHomePage).toBeCalled();
});
