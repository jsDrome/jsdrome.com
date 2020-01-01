import * as functions from 'firebase-functions';
import app from './app';

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '2GB',
};

export let ssrApp = functions.runWith(runtimeOpts).https.onRequest(app);