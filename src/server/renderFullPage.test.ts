import { renderFullPage } from './renderFullPage';

test('should create safe html', () => {
  const meta = '<meta>meta</meta>';
  const style = '<style>style</style>';
  const body = '<body>body</body>';
  const preloadedState = JSON.stringify({
    arr: ['foo', 'bar'],
    obj: {
      foo: 1,
      bar: 1
    },
    str: ''
  });
  const scripts = '<script>window</script>';
  const nonce = 'nonce';

  expect(renderFullPage({ meta, style, body, preloadedState, scripts, nonce })).toMatchSnapshot();
});
