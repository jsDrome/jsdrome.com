const TIMESTAMP = new Date().getTime();
const SHORT_NAME = 'Siri';
const TITLE = 'Sreeram Padmanabhan';
const AUTHOR = 'Sreeram Padmanabhan';
const DESCRIPTION = 'A Web Artist\'s web of thoughts';
const SHORT_DESCRIPTION = 'Web Artist';
const DOMAIN = 'https://sreeram.app';
const URL = DOMAIN;
const STAGE_URL = 'https://sreeram-test.web.app';
const MANIFEST_SEED = {
  'short_name': SHORT_NAME,
  'name': TITLE,
  'start_url': '/',
  'background_color': '#ffffff',
  'display': 'standalone',
  'theme_color': '#ffffff',
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
const OG_FB_APP_ID = '297023651089707';
const PAYTM_TEST = {
  amount: 90,
  merchantId: 'lfBFyS02396274370168',
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
  amount: 90,
  merchantId: 'lzSXOq48634307639622',
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
  return keywords.join(',');
})();
const PATHS = (() => {
  let paths = [];
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
};