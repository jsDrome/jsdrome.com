const list = require('./client/list');

const TIMESTAMP = new Date().getTime();
const SHORT_NAME = 'Short name';
const TITLE = 'Title';
const AUTHOR = 'Author';
const DESCRIPTION = 'Description';
const SHORT_DESCRIPTION = 'Short description';
const DOMAIN = "https://google.com"; // (without trailing slash)
const URL = DOMAIN;
const STAGE_URL = 'https://domain-test.web.app'; // (without trailing slash)
const THEME_COLOR = '#ffffff';

const MANIFEST_SEED = {
  'short_name': SHORT_NAME,
  'name': TITLE,
  'start_url': '/',
  'background_color': THEME_COLOR,
  'display': 'standalone',
  'theme_color': THEME_COLOR,
  "icons": [
    {
      "src": "/img/logo-192.png",
      "type": "image/png",
      "sizes": "192x192",
    },
    {
      "src": "/img/logo-512.png",
      "type": "image/png",
      "sizes": "512x512",
    },
  ],
};
const OG_IMAGE = DOMAIN + '/img/og_image.jpg';
const OG_IMAGE_ALT = TITLE;
const OG_TYPE = 'website';
const OG_FB_APP_ID = ''; // Your facebook app id for facebook likes etc.
const PAYTM_TEST = {
  amount: 75,
  merchantId: '', // Your paytm merchant test id
  website: "WEBSTAGING",
  orderId: TIMESTAMP,
  customerId: `Customer-${TIMESTAMP}`,
  email: '-',
  phone: '-',
  industryTypeId: "Retail",
  channelId: "WEB",
  callbackUrl: `http://localhost:9000/paymentprocess`,
  url: `https://securegw-stage.paytm.in/theia/processTransaction?ORDER_ID=${TIMESTAMP}`,
};
const PAYTM_PROD = {
  amount: 75,
  merchantId: '', // your paytm prod test id
  website: "DEFAULT",
  orderId: TIMESTAMP,
  customerId: `Customer-${TIMESTAMP}`,
  email: '-',
  phone: '-',
  industryTypeId: "Retail",
  channelId: "WEB",
  callbackUrl: `${DOMAIN}/paymentprocess`,
  url: `https://securegw.paytm.in/theia/processTransaction?ORDER_ID=${TIMESTAMP}`,
};
const KEYWORDS = (() => {
  let keywords = [];
  list.forEach(topic => {
    keywords.concat(topic.keywords);
  });
  return keywords.join(',');
})();

const PATHS = (() => {
  let paths = [];
  // eslint-disable-next-line no-magic-numbers
  list.slice(1).forEach(topic => {
    topic.links.forEach(link => {
      // eslint-disable-next-line no-magic-numbers
      paths.push(link.route);
    });
  });
  return paths;
})();

module.exports = {
  TIMESTAMP,
  SHORT_NAME,
  TITLE,
  AUTHOR,
  DESCRIPTION,
  SHORT_DESCRIPTION,
  DOMAIN,
  URL,
  STAGE_URL,
  MANIFEST_SEED,
  OG_IMAGE,
  OG_IMAGE_ALT,
  OG_TYPE,
  OG_FB_APP_ID,
  PAYTM_TEST,
  PAYTM_PROD,
  KEYWORDS,
  PATHS,
  THEME_COLOR,
  INSTAGRAMLINK: 'https://instagram.com/sreeramofficial',
  FACEBOOKLINK: 'https://facebook.com/sreeram.io',
  LINKEDINLINK: 'https://www.linkedin.com/in/sreeramofficial/',
  YOUTUBELINK: 'https://www.youtube.com/channel/UCBi39XFUKrqJtuN3DoKLDlg?view_as=subscriber',
  TWITTERLINK: 'https://twitter.com/in/sreeramofficial',
  EMAIL: 'me@sreeram.app',
};