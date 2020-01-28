/* eslint-disable camelcase */
/* eslint-disable no-magic-numbers */

import 'ignore-styles';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { Provider as ReduxProvider } from 'react-redux';
import bodyParser from 'body-parser';
import fs from 'fs';
import axios from 'axios';
import querystring from 'querystring';
import cookieParser from 'cookie-parser';

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
app.use(cookieParser());

if (process.env.FIREBASE !== 'true') {
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

  // if (!isUserLoggedIn(req)) return res.send('### Register/Login to continue reading..');
  return res.send(file.toString());
});

// const isUserLoggedIn = req => {
//   return !!req.cookies.__session;
// };

app.get('/login', (req, res) => {
  const { code } = req.query;

  return axios
    .post("https://www.linkedin.com/oauth/v2/accessToken", querystring.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: 'https://jsdrome.com/login',
      client_id: '78xv8akga6j22q',
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    }))
    .then(data => {
      const { access_token, expires_in } = data.data;

      res.cookie('__session', JSON.stringify({
        jsDromeAtLi: access_token,
        jsDromeAtTime: new Date().getTime(),
        jsDromeAtEx: expires_in,
      }));
      return res.redirect(302, '/');
    })
    .catch(err => {
      console.log(err);
      return res.redirect(302, '/?login=false');
    });
});

app.get('/logout', (req, res) => {
  res.clearCookie("__session");
  return res.redirect(302, '/');
});

app.get('/userData', (req, res) => {
  const { jsDromeAtLi } = JSON.parse(req.cookies.__session);
  console.log(req.cookies);
  if (!jsDromeAtLi) throw new Error();

  return axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
    headers: {
      Authorization: `Bearer ${jsDromeAtLi}`,
    },
  }).then(data => {
    const email = data.data.elements[0]['handle~'].emailAddress;
    return res.send({
      email,
    });
  })
    .catch(err => {
      console.log(err);
      return res.redirect(302, '/?login=false');
    });
});

app.get('**', (req, res) => {
  const sheets = new ServerStyleSheets();
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <AppShell />
        </ReduxProvider>
      </ThemeProvider>,
    ),
  );

  const css = sheets.toString().replace(/\n/g, " ");
  const reqPath = req.originalUrl.split('/').slice(2);
  const { title, ogTitle, description, ogDescription, ogUrl, ogImage } = getMetaTags(...reqPath);
  const content = renderFullPage(html, css, title, ogTitle, ogUrl, description, ogDescription, ogImage);
  res.send(content);
});

export default app;