import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Header } from '.';
import { initialState } from '../../reducers';

export default {
  component: Header,
  title: 'Header'
};

const store = configureStore()(initialState);

export const Base = () => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']} keyLength={0}>
      <Header />
    </MemoryRouter>
  </Provider>
);
