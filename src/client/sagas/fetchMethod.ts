import fetch from 'cross-fetch';
// import { getBaseUrl } from '../selectors';
import { call } from 'redux-saga/effects';

export function* fetchMethod({
  path,
  params,
  options
}: {
  path: string;
  params?: Record<string, any>;
  options?: Record<string, any>;
}) {
  // const baseUrl = yield select(getBaseUrl);
  const url = new URL(`${process.env.API_URI}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value || '');
    });
  }

  const res: Response = yield call(fetch, url.toString(), options);
  return yield call([res, res.json]);
}
