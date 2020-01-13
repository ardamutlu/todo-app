import * as actions from './pages';

test('should create an action to set is mobile', () => {
  expect(actions.setIsMobile(false)).toMatchSnapshot();
});
