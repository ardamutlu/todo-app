import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { rootReducer } from '../reducers';
import { Router } from '.';
import { IntlProvider } from 'react-intl';

let state: any;
let store: any;

jest.mock('./routes.ts', () => {
  return {
    LoadableHomePage: () => <p>Home</p>,
    LoadableDocumentationPage: () => <p>Documentation</p>,
    LoadableNotFoundPage: () => <p>404</p>
  };
});

beforeEach(() => {
  state = createStore(rootReducer).getState();
  store = configureStore()(state);
});

test('should render Home page', () => {
  const tree = render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
          <Router />
        </MemoryRouter>
      </IntlProvider>
    </Provider>
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('should render Documentation page', () => {
  const tree = render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <MemoryRouter initialEntries={[{ pathname: '/documentation', key: 'testKey' }]}>
          <Router />
        </MemoryRouter>
      </IntlProvider>
    </Provider>
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('should render 404 page', () => {
  const tree = render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <MemoryRouter initialEntries={[{ pathname: '/noPath', key: 'testKey' }]}>
          <Router />
        </MemoryRouter>
      </IntlProvider>
    </Provider>
  );

  expect(tree.asFragment()).toMatchSnapshot();
});
