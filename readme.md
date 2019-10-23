## To create a new blog post

    Update `src/client/list.js` to add a new blog entry, add an og image at `images/og`, import the image at `./src/client/assets.js`, and create a `.md` file at the mentioned route in the list file. Once commited and pushed, the master branch will be deployed to production, all other branches will only be pushed to test env. Everything else has been configured.

## Environments

 - Production: `https://sreeram.app`
 - Test: `https://sreeram-test.web.app`

## Folder structure

 - `.circleci` - circle ci configuration here
 - `.env` - environment variables here in a file called env.sh (Do not commit it)
 - `cypress` - crypress test files
 - `functions` - Firebase expects the server files to be present here. When you build your server source code, it gets put here. You normally wouldnt have to touch anything here. There will only be a package.json and package-lock.json in it. If any new package gets added in your server source code, you will have to update the package.json here also.
 - `images` - All custom images go here.
 - `karma` - Karma configuration for unit testing and browserstack testing.
 - `posts` - The markdown files for the blog posts are to be put here.
 - `puppeteer` - Puppeteer test files are located here.
 - `src`
    - `client` - client source code.
      - `data` - client data layer.
      - `utils` - client utility functions.
      - `view` - client view layer.
        - `components` - static components go here.
        - `pages` - Router page components go here.
    - `server` - server source code.
    - theme.js - Theme file.
    - variables.js - All variables and config values.
 - `templates`
    - ads.txt - For adsense. This gets copied to production client bundle just like that.
    - `client.html` - Serves as the index file for the dev build used by html-webpack-plugin.
    - server.html - Serves as the index file served by the server in production.
    - test.html - A html template file for karma unit tests.
  - `webpack` - All webpack configurations go here.


## Env variables

 - PAYTM_KEY
 - PAYTM_TEST_KEY
 - BROWSERSTACK_USER
 - BROWSERSTACK_TOKEN
 - FIREBASE_TOKEN
 - CODECOV_TOKEN
 - CYPRESS_TOKEN

 If you are a dev, you will only require dummy values for the above except for Browserstack which only works with valid values. Put them in `.env/env.sh` and do a `source .env/env.sh` to import them.


## npm scripts
  - `clean` - removes unneccesary folders, log files.
  - `build:client:dev` - builds the client source code for development.
  - `build:client:devserver` - same as above but with webpack-dev-server and HMR.
  - `build:client:prod` - builds the client source code for production.
  - `build:server:dev` - builds the server source code for development. Note: A `PAYTM_TEST_KEY` env variable needs to be set.
  - `build:server:prod` - builds the server source code for production. Note: A `PAYTM_TEST_KEY` env variable needs to be set.
  - `test` - run unit test once.
  - `test:dev` - run unit test watching for changes.
  - `test:browserstack` - run unit tests in browserstack. Note: `BROWSERSTACK_USER` and `BROWSERSTACK_TOKEN` env variables need to be set.
  - `test:codecov` - reports code coverage to codecov. Note: `CODECOV_TOKEN` env variable needs to be set.
  - `test:cypress:open` - Opens cypress UI.
  - `test:cypress:run` -  Runs cypress tests. Note: `CYPRESS_TOKEN` env variable needs to be set.
  - `test:puppeteer:coverage` - Runs puppeteer coverage test.
  - `test:puppeteer:crawlsite` - Runs puppeteer site crawl test.
  - `test:puppeteer:googlesearch` - Runs puppeteer googlesearch test.
  - `test:puppeteer:caching` - Runs puppeteer service worker test.
  - `docs` - Generates documentation.
  - `start` - Simulates prod like behaviour in local. Note: `PAYTM_TEST_KEY` env variable need to be set and there is no HMR.
  - `firebase:prod:functions` - Activates functions in Firebase production. Note: `FIREBASE_TOKEN` env variable needs to be set.
  - `firebase:stage:hosting` - Activates client in Firebase staging. Note: `FIREBASE_TOKEN` env variable needs to be set.
  - `firebase:prod:hosting` - Activates client in Firebase production. Note: `FIREBASE_TOKEN` env variable needs to be set.
  - `deploy` - Activates server and client in production instantly. Note: `FIREBASE_TOKEN` env variable needs to be set.

## To see the app

  Run `npm run build:client:devserver` in one tab to start the client at `http://localhost:9000` and run `nodemon src/server/mock` in another to start the server parallely at `https://localhost:5000`.

  To run with SSR, just do an `npm start`. But there is no HMR. You will have to stop and start every time you make a change be it the client or server.
