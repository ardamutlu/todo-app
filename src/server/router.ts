import * as express from 'express';
import * as renderer from './controllers/renderer';

export function router(app: express.Application) {
  app.use('/robots.txt', express.static('dist/client/robots.txt'));

  // for PWA
  app.use('/service-worker.js', express.static('dist/client/service-worker.js'));
  app.use('/manifest.webmanifest', express.static('dist/client/manifest.webmanifest'));

  app.use('/public', express.static('dist/client'));
  app.get('*', renderer.get);
}
