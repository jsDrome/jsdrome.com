import * as functions from 'firebase-functions';
import app from './app';

export let ssrApp = functions.https.onRequest(app);