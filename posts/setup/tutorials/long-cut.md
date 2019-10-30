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