/* eslint-disable no-magic-numbers */
import 'ignore-styles';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { Provider as ReduxProvider } from 'react-redux';
import bodyParser from 'body-parser';
import fs from 'fs';

import ErrorBoundary from '../client/view/components/ErrorBoundary/ErrorBoundary';
import AppShell from '../client/view/components/AppShell/AppShell';

import theme from '../theme';
import store from '../client/data/store';
import { getMetaTags } from '../client/utils/custom';
import { renderFullPage, genchecksum } from './utils';

const cors = require('cors')({ origin: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

if( process.env.NODE_ENV === 'development') {
  app.use(express.static('_dist'));
}

app.options('*', cors);

app.post('/paymentprocess', (req, res) => {
  if (req.body.STATUS && req.body.STATUS === 'TXN_SUCCESS') {
    return res.redirect(302, '/?payment=true');
  }
  return res.redirect(302, '/?payment=false');
});

app.post('/checksum', (req, res) => {
  genchecksum(req.body, process.env.KEY, cs => res.send(cs));
});

app.get('/data', (req, res) => {
  const { folder, subfolder, post } = req.query;
  var file = fs.readFileSync(`./posts/${folder}/${subfolder}/${post}.md`, 'utf8');
  res.set('Content-type', 'text/plain');
  // eslint-disable-next-line global-require
  res.send(file.toString());
});

app.get('**', (req, res) => {
  const sheets = new ServerStyleSheets();
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <ReduxProvider store={store}>
            <AppShell />
          </ReduxProvider>
        </ErrorBoundary>
      </ThemeProvider>,
    ),
  );

  const css = sheets.toString().replace(/\n/g, " ");
  // eslint-disable-next-line no-magic-numbers
  const reqPath = req.originalUrl.split('/').slice(2);
  const { title, ogTitle, description, ogDescription, ogUrl, ogImage } = getMetaTags(...reqPath);
  const content = renderFullPage(html, css, title, ogTitle, ogUrl, description, ogDescription, ogImage);
  res.send(content);
});

export default app;