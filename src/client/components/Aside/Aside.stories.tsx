import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Aside } from '.';
import { initialState } from '../../reducers';

export default {
  component: Aside,
  title: 'Aside'
};

const store = configureStore()(initialState);

export const Base = () => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']} keyLength={0}>
      <Aside />
    </MemoryRouter>
  </Provider>
);
