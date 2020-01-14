import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NotFound from '.';
import { initialState } from '../../../reducers';
import createComponentWithIntl from '../../../utils/createComponentWithIntl';

export default {
  component: NotFound,
  title: 'NotFound'
};

const store = configureStore()(initialState);

const component = createComponentWithIntl(<NotFound />);

export const Base = () => <Provider store={store}>{component}</Provider>;
