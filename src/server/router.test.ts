/**
 * @jest-environment node
 */

// if you don't change the jest environment, styled-components won't run

import request from 'supertest';
import { runServer } from './server';

test('should return the assets', async () => {
  const app = runServer();
  const res = await request(app).get('/public');

  expect(res.status).toEqual(301);
  expect(res.text.length).not.toEqual(0);
});

test('should return HTML', async () => {
  const app = runServer();
  const res = await request(app).get('/');

  expect(res.status).toEqual(200);
  expect(res.text.length).not.toEqual(0);
});
