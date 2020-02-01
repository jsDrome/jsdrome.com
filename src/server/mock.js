/* eslint-disable camelcase */
/* eslint-disable no-magic-numbers */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const fs = require('fs');
// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();
const axios = require('axios');
const querystring = require('querystring');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/checksum', (req, res) => {
  res.send("3817iH3IQV2/tYwCJ7Mwn2/Zkw+mpmivoXGuxnFVWyYxtVHCjOQvjjcfD1dte7JhD0xMz1CCH/BAaoTqdv4QlHLTfJlzTs/OI2BH4wd4D8g=");
});

app.post('/paymentprocess', (req, res) => {
  if (req.body.STATUS && req.body.STATUS === 'TXN_SUCCESS') {
    return res.redirect(302, '/?payment=true');
  }
  return res.redirect(302, '/?payment=false');
});

app.get('/data', (req, res) => {

  const { folder, subfolder, post } = req.query;
  var file = fs.readFileSync(`./posts/${folder}/${subfolder}/${post}.md`, 'utf8');
  res.set('Content-type', 'text/plain');

  // if(!isUserLoggedIn(req)) return res.send('### Register/Login to continue reading..');
  return res.send(file.toString());
});

// const isUserLoggedIn = req => {
//   return !!req.cookies.__session;
// };

app.get('/login', (req, res) => {
  const { originalUrl } = req.query;
  res.redirect(302, `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78xv8akga6j22q&redirect_uri=http://localhost:9000/loginprocess?originalUrl=${originalUrl}&scope=r_liteprofile%20r_emailaddress%20w_member_social`);
});

app.get('/loginprocess', (req, res) => {
  const { code, originalUrl } = req.query;

  return axios
    .post("https://www.linkedin.com/oauth/v2/accessToken", querystring.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: `http://localhost:9000/loginprocess?originalUrl=${originalUrl}`,
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
      return res.redirect(originalUrl || '/');
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
  const { originalUrl } = req.query;

  if (!jsDromeAtLi) return;

  return axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
    headers: {
      Authorization: `Bearer ${jsDromeAtLi}`,
    },
  }).then(() => {
    // const email = data.data.elements[0]['handle~'].emailAddress;
    res.redirect(originalUrl);
  });
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);