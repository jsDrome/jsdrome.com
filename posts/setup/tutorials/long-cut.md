# Long cut

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