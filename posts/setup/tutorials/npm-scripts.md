# npm scripts

&nbsp;

`clean` Removes unneccesary folders, log files.

`build:client:dev` Builds the client source code for development.

`build:client:devserver` Same as above but with webpack-dev-server and HMR.

`build:client:prod` Builds the client source code for production.

`build:server:dev` Builds the server source code for development. Note: A `PAYTM_TEST_KEY` Env variable needs to be set.

`build:server:prod` Builds the server source code for production. Note: A `PAYTM_TEST_KEY` Env variable needs to be set.

`test` Run unit test once.

`test:dev` Run unit test watching for changes.

`test:browserstack` Run unit tests in browserstack. Note: `BROWSERSTACK_USER` and `BROWSERSTACK_TOKEN` Env variables need to be set.

`test:codecov` Reports code coverage to codecov. Note: `CODECOV_TOKEN` env variable needs to be set.

`test:cypress:open` Opens cypress UI.

`test:cypress:run`  Runs cypress tests. Note: `CYPRESS_TOKEN` env variable needs to be set.

`test:puppeteer:coverage` Runs puppeteer coverage test.

`test:puppeteer:crawlsite` Runs puppeteer site crawl test.

`test:puppeteer:googlesearch` Runs puppeteer googlesearch test.

`test:puppeteer:caching` Runs puppeteer service worker test.

`docs` Generates documentation.

`start` Simulates prod like behaviour in local. Note: `PAYTM_TEST_KEY` env variable need to be set and there is no HMR.

`firebase:prod:functions` Activates functions in Firebase production. Note: `FIREBASE_TOKEN` env variable needs to be set.

`firebase:stage:hosting` Activates client in Firebase staging. Note: `FIREBASE_TOKEN` env variable needs to be set.

`firebase:prod:hosting` Activates client in Firebase production. Note: `FIREBASE_TOKEN` env variable needs to be set.

`deploy` Activates server and client in production instantly. Note: `FIREBASE_TOKEN` env variable needs to be set.
