import loadable from '@loadable/component';

export const LoadableHomePage = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/pages/Home')
);

export const LoadableDocumentationPage = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/pages/Documentation')
);

export const LoadableNotFoundPage = loadable(() => import('../components/pages/NotFound'));
