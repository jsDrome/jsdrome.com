const PercyScript = require('@percy/script');
const { STAGE_URL } = require('../src/variables');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto(STAGE_URL);
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('#paytm-payment-btn');
  await percySnapshot('homepage');
});