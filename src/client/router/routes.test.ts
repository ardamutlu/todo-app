import { LoadableHomePage, LoadableDocumentationPage, LoadableNotFoundPage } from './routes';

test('should resolve required modules', async () => {
  expect(
    (((await LoadableHomePage.load()) as unknown) as { default: Function }).default.name
  ).toEqual('Home');

  expect(
    (((await LoadableDocumentationPage.load()) as unknown) as { default: Function }).default.name
  ).toEqual('Documentation');

  expect(
    (((await LoadableNotFoundPage.load()) as unknown) as { default: Function }).default.name
  ).toEqual('NotFound');
});
