/* eslint-disable camelcase */

const customLaunchers = {
  // bs_chrome_mac_41: {
  //   base: 'BrowserStack',
  //   browser: 'Chrome',
  //   browser_version: '41',
  //   os: 'OS X',
  //   os_version: 'High Sierra',
  // },
  bs_chrome_mac: {
    base: 'BrowserStack',
    browser: 'Chrome',
    browser_version: '75',
    os: 'OS X',
    os_version: 'High Sierra',
  },
  bs_firefox_mac: {
    base: 'BrowserStack',
    browser: 'Firefox',
    browser_version: '66',
    os: 'OS X',
    os_version: 'High Sierra',
  },
  bs_safari_mac: {
    base: 'BrowserStack',
    browser: 'Safari',
    browser_version: '11.1',
    os: 'OS X',
    os_version: 'High Sierra',
  },
};

const browsers = [
  // 'bs_chrome_mac_41',
  'bs_chrome_mac',
  'bs_firefox_mac',
  'bs_safari_mac',
];

module.exports = { customLaunchers, browsers };