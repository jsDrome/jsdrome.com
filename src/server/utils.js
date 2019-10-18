/* eslint-disable no-magic-numbers */
import fs from 'fs';
import crypto from 'crypto';
import moment from 'moment';

const { THEME_COLOR, AUTHOR, KEYWORDS, OG_IMAGE_ALT, OG_TYPE, OG_FB_APP_ID } = require('../../src/variables');
const template = fs.readFileSync('./templates/server.html', 'utf8');

export const renderFullPage = (html, css, title, ogTitle, ogUrl, description, ogDescription, ogImage) => template
  .replace('<!-- html here -->', html)
  .replace('/* css here */', css)
  // variables
  .replace('<!--title here-->', title)
  .replace('<!--ogTitle here-->', ogTitle)
  .replace('<!--ogUrl here-->', ogUrl)
  .replace('<!--description here-->', description)
  .replace('<!--ogDescription here-->', ogDescription)
  .replace('<!--ogImage here-->', ogImage)
  // constants
  .replace('<!--author here-->', AUTHOR)
  .replace('<!--keywords here-->', KEYWORDS)
  .replace('<!--ogType here-->', OG_TYPE)
  .replace('<!--ogImageAlt here-->', OG_IMAGE_ALT)
  .replace('<!--themeColor here-->', THEME_COLOR)
  .replace('<!--fbAppId here-->', OG_FB_APP_ID)
  .replace('<!--date here-->', moment().format('YYYY-MM-DD'));

// Paytm

const paramsToString = params => {
  var data = '';
  var tempKeys = Object.keys(params);
  tempKeys.sort();
  tempKeys.forEach(key => {
    data += params[key] + '|';
  });
  return data;
};

const encrypt = (data, key) => {
  var iv = '@@@@&&&&####$$$$';
  var algo = '256';
  switch (key.length) {
  case 16:
    algo = '128';
    break;
  case 24:
    algo = '192';
    break;
  case 32:
    algo = '256';
    break;
  }

  var cipher = crypto.createCipheriv('AES-' + algo + '-CBC', key, iv);
  var encrypted = cipher.update(data, 'binary', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const genSalt = (length, cb) => {
  crypto.randomBytes((length * 3.0) / 4.0, (err, buf) => {
    var salt;
    if (!err) {
      salt = buf.toString("base64");
    }
    cb(err, salt);
  });
};

export const genchecksum = (params, key, cb) => {
  var data = paramsToString(params);
  let encrypted;
  // eslint-disable-next-line handle-callback-err
  genSalt(4, function (err, salt) {
    var sha256 = crypto.createHash('sha256').update(data + salt).digest('hex');
    var checkSum = sha256 + salt;
    encrypted = encrypt(checkSum, key);
    cb(encrypted);
  });
};