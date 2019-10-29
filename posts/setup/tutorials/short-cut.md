# Short cut

 - Fork the repo.
 - Create a file `./.env/env.sh`. This is where all your secret tokens go. Do not commit it.
 - Register at [Firebase](https://firebase.google.com/): This is where the site will be deployed.
 - Create a new app.
 - Create 2 hosting environments one for production and one for testing.
 - Replace the project name values in `.firebaserc`.
 - Get your Firebase token (`FIREBASE_TOKEN`) by executing `firebase login:ci`.
 - Put all the environment variables in `env.sh`.
 - Run `npm run deploy`. It will do the rest.