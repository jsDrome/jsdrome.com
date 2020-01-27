/* eslint-disable camelcase */
/* eslint-disable no-magic-numbers */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();
const axios = require('axios');
const querystring = require('querystring');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  // eslint-disable-next-line global-require
  res.send(file.toString());
});

app.get('/login', (req, res) => {
  const { code } = req.query;
  // console.log(code);
  return axios
    .post("https://www.linkedin.com/oauth/v2/accessToken", querystring.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: 'http://localhost:9000/login',
      client_id: '78xv8akga6j22q',
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    }))
    .then(data => {
      // eslint-disable-next-line no-unused-vars
      const { access_token, expiresIn } = data.data;

      return axios.get('https://api.linkedin.com/v2/me', {
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      });
    })
    .then(data => {
      console.log(data.data);
      return res.redirect(302, `/?name=${data.data.localizedFirstName}`);
    })
    .catch(err => {
      console.log(err);
      return res.redirect(302, '/?login=false');
    });
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);