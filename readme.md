<img src='https://github.com/jsDrome/jsdrome-2020/blob/master/images/site/og_image.jpg?raw=true' title='js-drome' class='post-first-image' />

&nbsp;

# What is jsDrome?

&nbsp;

Some time back in 2018, I wanted to create the perfect Web App boilerplate project. So I started creating a template from scratch wth everything configured. All I required to do is change some configurables to get a full fledged website. I called it `<jsDrome />`.

Read along to learn to set it up.

&nbsp;

<img src='https://github.com/jsDrome/jsdrome-2020/blob/master/images/site/lighthouse.png?raw=true' title='jsdrome lighthouse' class='post-first-image' />

# Features

&nbsp;

### View layer
 - React
 - React-redux
 - Material-ui

### Data layer
 - Redux

### Server side
 - Firebase
 - Express

### Building
 - Webpack
 - Eslint
 - Editorconfig
 - Commit Linting

### Testing
 - Karma, Jasmine Unit tests
 - Codecov Code coverage reporting
 - Cypress integration testing
 - Browserstack cross-browser testing
 - Puppeteer performance testing

### Documentaton
 - JSDoc

### CI-CD
 - Circle CI

### Other features
 - Progressive Web App
 - Isomorphic
 - Built-in Components
 - Google Search Engine optimisation
 - Performance fine turning
 - Installable
 - PayTM Payment Gateway Integrated.
 - Sitemaps
 - Privacy Policy

&nbsp;

# Short cut way to setup

&nbsp;

Fork the repo.

Create a file `./.env/env.sh`. This is where all your secret tokens go. Do not commit it.

## Install dependencies

`npm i`

## Run it

`npm run build:client:devserver`

`node src/server/mock`


## Firebase setup

Register at **[Firebase](https://firebase.google.com/)**: This is where the site will be deployed.

Create a new app and get the project id.

Replace the project id and hosting values in `.firebaserc`.

Get your Firebase token `FIREBASE_TOKEN` by executing `npx firebase login:ci`.

## Now, deploy!

Run `npm run deploy`. It deploys to production in about a minute.

&nbsp;

# Comprehensive way to setup

&nbsp;

Fork the repo.

Create a file `./.env/env.sh`. This is where all your secret tokens go. Do not commit it.

## Firebase setup

Register at **[Firebase](https://firebase.google.com/)**: This is where the site will be deployed.

Create a new app and get the project id.

Replace the project id and hosting values in `.firebaserc`.

Get your Firebase token `FIREBASE_TOKEN` by executing `npx firebase login:ci`.

## PayTM setup

Create a PayTM merchant account and get your `merchant id`.

Replace variables `PAYTM_TEST.merchantId` and`PAYTM_PROD.merchantId` with your values.

Get your `PAYTM_KEY` and `PAYTM_TEST_KEY` secret variables and put it in `./.env/env.sh`.

## Google Tag manager setup

Register for Google tag manager, and replace the Google Tag Manager script in `templates/server.html` and put yours.

## Circle CI setup

Register at [Circle CI](https://cicleci.com). This is the Continous Integration Server. It builds the code runs some tests and deploys to Firebase. Set it up to build your repo.

## Codecov setup

Register at [Codecov](https://codecov.io). Set it up to test your repo. Get the `CODECOV_TOKEN` token and put it in `./.env/env.sh`.

## Cypress setup

Setup Cypress by running `npm run test:cypress:open`, get the `CYPRESS_TOKEN` and put it in `./.env/env.sh`.

## Browserstack setup

Get a Browserstack account. Get the `BROWSERSTACK_USER` and `BROWSERSTACK_TOKEN` and put it in `./.env/env.sh`.

## Final step

Copy all secret tokens to your Circle CI project as environment variables.

Once you push the code, if everything is set up correctly, pushing your code will cause Circle CI to take your code and test it, build it and deploy it in Firebase.

&nbsp;

# Folder structure

&nbsp;

`.circleci` circle ci configuration goes here

`.env/env.sh` environment variables here in a file called env.sh (Do not commit it)

`cypress` crypress test files

`functions`

Firebase expects the server files to be present here. When you build your server source code, it gets put here. You normally wouldnt have to touch anything here. There will only be a package.json and package-lock.json in it. If any new package gets added in your server source code, you will have to update the package.json here also.


`images` All custom images go here.

`karma` Karma configuration for unit testing and browserstack testing.

`posts` The markdown files for the blog posts are to be put here.

`puppeteer` Puppeteer test files are located here.

`src`

 - `client` client source code.

 - `server` server source code.

 - `theme.js` Theme file.

 - `variables.js` All variables and config values.

`templates`

`ads.txt` For adsense. This gets copied to production client bundle just like that.

`client.html` Serves as the index file for the dev build used by html-webpack-plugin.

`server.html` Serves as the index file served by the server in production.

`test.html` A html template file for karma unit tests.

`webpack`
All webpack configurations go here.

&nbsp;

# Environment variables

&nbsp;

- `PAYTM_KEY`
- `PAYTM_TEST_KEY`
- `BROWSERSTACK_USER`
- `BROWSERSTACK_TOKEN`
- `FIREBASE_TOKEN`
- `CODECOV_TOKEN`
- `CYPRESS_TOKEN`

If you are a dev, you will only require dummy values for the above except for Browserstack which only works with valid values. Put them in `.env/env.sh` and do a `source .env/env.sh` to import them.

&nbsp;

# Npm scripts

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

&nbsp;

# Running app locally

&nbsp;

Run `npm run build:client:devserver` in one tab to start the client at `http://localhost:9000` and run `nodemon src/server/mock` in another to start the server parallely at `https://localhost:5000`.


To run with SSR, just do an `npm start`. But there is no HMR. You will have to stop and start every time you make a change be it the client or server.

&nbsp;

# How to create a new blog post

&nbsp;

Update `src/client/list.js` to add a new blog entry.

Create a `.md` file at the mentioned route in the list file.

Once commited and pushed, the master branch will be deployed to production, all other branches will only be pushed to test env.

