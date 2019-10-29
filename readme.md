# jsDrome

## What this is about

Some time in 2018, I wanted to create the perfect web boilerplate project. So I started creating a template from scratch wth everything configured. All I wanted to do is change some configurables to get a full fledged website. I call it `jsDrome`.

## Features
 - React, Material-ui as View layer
 - Redux as the data layer
 - Express as the node server
 - Webpack as the build tool
 - Built-in Components
 - Progressive Web App
 - Isomorphic
 - Deployable in Firebase
 - Optimised for Google Search
 - Optimised for Performance
 - Installable
 - PayTM Payment Gateway Integrated.
 - Circle CI Integrated
 - Karma, Jasmine Unit test integrated.
 - Codecov integrated.
 - Cypress integrated.
 - Browserstack integrated.
 - Puppeteer integrated.
 - Eslint, Editorconfig integrated.
 - Commit Linting integrated.
 - JSDoc integrated.
 - Privacy Policy
 - Sitemaps

## Setup

There are 2 ways to deploy your site. A) The easy way where you fork the repo, make some configurations and deploy manually and B) The straight way, where all you do is write code and push it to Github, and Circle CI takes over, deploys the site on a staging server specified by you, runs the unit tests, cypress tests, browserstack tests, puppeteer tests and if everything pass, activates it in the production server.

## Short cut

 - Fork the repo.
 - Create a file `./.env/env.sh`. This is where all your secret tokens go. Do not commit it.
 - Register at [Firebase](https://firebase.google.com/): This is where the site will be deployed.
 - Create a new app.
 - Create 2 hosting environments one for production and one for testing.
 - Replace the project name values in `.firebaserc`.
 - Get your Firebase token (`FIREBASE_TOKEN`) by executing `firebase login:ci`.
 - Replace variables `OG_FB_APP_ID`, `PAYTM_TEST.merchantId`, `PAYTM_PROD.merchantId` with your values.
 - Get your `PAYTM_KEY` and `PAYTM_TEST_KEY` secret variables.
 - Put all the secret variables in `env.sh`.
 - Run `npm run deploy`. It will do the rest.

## Long cut

 - Fork the repo.
 - Create a file `./.env/env.sh`. This is where all your secret tokens go. Do not commit it.
 - Register at [Firebase](https://firebase.google.com/): This is where the site will be deployed.
 - Create a new app.
 - Create 2 hosting environments one for production and one for testing.
 - Replace the project name values in `.firebaserc`.
 - Get your Firebase token `FIREBASE_TOKEN` by executing `firebase login:ci`.
 - Replace variables `OG_FB_APP_ID`, `PAYTM_TEST.merchantId`, `PAYTM_PROD.merchantId` with your values.
 - Get your `PAYTM_KEY` and `PAYTM_TEST_KEY` secret variables.
 - Register at [Circle CI](https://cicleci.com) - This is the Continous Integration Server. It builds the code runs some tests and deploys to Firebase. Set it up to build your repo.
 - Register at [Codecov](https://codecov.io). Set it up to test your repo. Get the `CODECOV_TOKEN` token.
 - Setup Cypress, get the `CYPRESS_TOKEN`.
 - Get a Browserstack account. Get the `BROWSERSTACK_USER` and `BROWSERSTACK_TOKEN`.
 - Get a PayTM Merchant account. Get your `PAYTM_KEY` and `PAYTM_TEST_KEY`.
 - Put all the environment variables in `env.sh` and in Circle CI.


## To create a new blog post

 - Update `src/client/list.js` to add a new blog entry
 - Add an og image at `images/og`
 - Import the image at `./src/client/assets.js`
 - Create a `.md` file at the mentioned route in the list file.
 - Once commited and pushed, the master branch will be deployed to production, all other branches will only be pushed to test env.


## Folder structure

- `.circleci` circle ci configuration here
- `.env` environment variables here in a file called env.sh (Do not commit it)
- `cypress` crypress test files
- `functions` Firebase expects the server files to be present here. When you build your server source code, it gets put here. You normally wouldnt have to touch anything here. There will only be a package.json and package-lock.json in it. If any new package gets added in your server source code, you will have to update the package.json here also.
- `images` All custom images go here.
- `karma` Karma configuration for unit testing and browserstack testing.
- `posts` The markdown files for the blog posts are to be put here.
- `puppeteer` Puppeteer test files are located here.
- `src`
   - `client` client source code.
     - `data` client data layer.
     - `utils` client utility functions.
     - `view` client view layer.
       - `components` static components go here.
       - `pages` Router page components go here.
   - `server` server source code.
   - `theme.js` Theme file.
   - `variables.js` All variables and config values.
- `templates`
   - `ads.txt` For adsense. This gets copied to production client bundle just like that.
   - `client.html` Serves as the index file for the dev build used by html-webpack-plugin.
   - `server.html` Serves as the index file served by the server in production.
   - `test.html` A html template file for karma unit tests.
 - `webpack`- All webpack configurations go here.


## Env variables

- `PAYTM_KEY`
- `PAYTM_TEST_KEY`
- `BROWSERSTACK_USER`
- `BROWSERSTACK_TOKEN`
- `FIREBASE_TOKEN`
- `CODECOV_TOKEN`
- `CYPRESS_TOKEN`

 If you are a dev, you will only require dummy values for the above except for Browserstack which only works with valid values. Put them in `.env/env.sh` and do a `source .env/env.sh` to import them.


## npm scripts
 - `clean` Removes unneccesary folders, log files.
 - `build:client:dev` Builds the client source code for development.
 - `build:client:devserver` Same as above but with webpack-dev-server and HMR.
 - `build:client:prod` Builds the client source code for production.
 - `build:server:dev` Builds the server source code for development. Note: A `PAYTM_TEST_KEY` Env variable needs to be set.
 - `build:server:prod` Builds the server source code for production. Note: A `PAYTM_TEST_KEY` Env variable needs to be set.
 - `test` Run unit test once.
 - `test:dev` Run unit test watching for changes.
 - `test:browserstack` Run unit tests in browserstack. Note: `BROWSERSTACK_USER` and `BROWSERSTACK_TOKEN` Env variables need to be set.
 - `test:codecov` Reports code coverage to codecov. Note: `CODECOV_TOKEN` env variable needs to be set.
 - `test:cypress:open` Opens cypress UI.
 - `test:cypress:run`  Runs cypress tests. Note: `CYPRESS_TOKEN` env variable needs to be set.
 - `test:puppeteer:coverage` Runs puppeteer coverage test.
 - `test:puppeteer:crawlsite` Runs puppeteer site crawl test.
 - `test:puppeteer:googlesearch` Runs puppeteer googlesearch test.
 - `test:puppeteer:caching` Runs puppeteer service worker test.
 - `docs` Generates documentation.
 - `start` Simulates prod like behaviour in local. Note: `PAYTM_TEST_KEY` env variable need to be set and there is no HMR.
 - `firebase:prod:functions` Activates functions in Firebase production. Note: `FIREBASE_TOKEN` env variable needs to be set.
 - `firebase:stage:hosting` Activates client in Firebase staging. Note: `FIREBASE_TOKEN` env variable needs to be set.
 - `firebase:prod:hosting` Activates client in Firebase production. Note: `FIREBASE_TOKEN` env variable needs to be set.
 - `deploy` Activates server and client in production instantly. Note: `FIREBASE_TOKEN` env variable needs to be set.

## Running the app locally

- Run `npm run build:client:devserver` in one tab to start the client at `http://localhost:9000` and run `nodemon src/server/mock` in another to start the server parallely at `https://localhost:5000`.

- To run with SSR, just do an `npm start`. But there is no HMR. You will have to stop and start every time you make a change be it the client or server.
