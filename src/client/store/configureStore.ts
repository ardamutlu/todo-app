import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';
import { setLanguage } from '../actions/i18n';
import { setIsMobile } from '../actions/pages';

export const history = process.env.IS_BROWSER ? createBrowserHistory() : createMemoryHistory();

const createEnhancer = (sagaMiddleware: ReturnType<typeof createSagaMiddleware>) => {
  const composeEnhancers = composeWithDevTools({});

  return composeEnhancers(applyMiddleware(sagaMiddleware));
};

export const configureStore = (
  preloadedState: Record<string, any> = {}
): {
  store: Store;
  runSaga: () => Promise<SagaMiddleware<typeof rootSaga>['run']>;
} => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = createEnhancer(sagaMiddleware);
  const store = createStore(rootReducer, preloadedState, enhancer);

  const runSaga = async () => {
    return sagaMiddleware.run(rootSaga).toPromise();
  };

  // for client-side
  if (process.env.IS_BROWSER) {
    const lang: any = localStorage.getItem('lang');
    const innerWidth: number = window.innerWidth;
    if (innerWidth) store.dispatch(setIsMobile(innerWidth < 992));
    if (lang) store.dispatch(setLanguage(lang));
    runSaga();
  }

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('../reducers', async () => {
      const { rootReducer } = await import(/* webpackMode: "eager" */ '../reducers');

      store.replaceReducer(rootReducer);
    });
  }
  return { store, runSaga };
};
