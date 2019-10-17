/* eslint-disable no-magic-numbers */
const express = require('express');
const bodyParser = require('body-parser');

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/checksum', (req, res) => {
  res.send('abcde');
});

app.post('/paymentprocess', (req, res) => {
  if(req.body.STATUS && req.body.STATUS === 'TXN_SUCCESS') {
    return res.redirect(302, '/?payment=true');
  }
  return res.redirect(302, '/?payment=false');
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);