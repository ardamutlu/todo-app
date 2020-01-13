import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadableHomePage, LoadableDocumentationPage, LoadableNotFoundPage } from './routes';
import { App } from '../components/App';

export const Router = () => (
  <App>
    <Switch>
      <Route exact path="/">
        <LoadableHomePage />
      </Route>
      <Route exact path="/documentation">
        <LoadableDocumentationPage />
      </Route>
      <Route>
        <LoadableNotFoundPage />
      </Route>
    </Switch>
  </App>
);
