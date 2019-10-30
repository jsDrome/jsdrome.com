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