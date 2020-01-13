import * as actions from './i18n';

test('should create an action to set language', () => {
  expect(actions.setLanguage('en')).toMatchSnapshot();
});
