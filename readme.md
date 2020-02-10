<img src='https://github.com/jsDrome/jsdrome-2020/blob/master/images/site/og_image.jpg?raw=true' title='js-drome' class='post-first-image' />

&nbsp;

# Hello, World!

jsDrome is a mentor-driven open source transformation community of engineers for engineers.

As part of your inception, we provide you with a bootcamp.


## 1. What you will be learning

Web Software Engineering (Frontend, Backend, DevOps, Testing). After the course, you will be inducted into the community, given a contributor badge and will be put in a team of other engineers working to build this community.

## 2. How long will it take

The classes are of 1 hour sessions on an a daily basis. It will be over hangout meet and the time will be communicated to you. You will be put in a batch with up to 20 other people. The classes will be practical and so you will need a computer. There will be a mentor who will teach in the first half an hour and you will practice in the other half.

## 3. What you will need

    - Computer with an OS preferably linux based.
    - Good internet connection
    - Github account
    - Node JS
    - VS Code
    - Git bash (only for Windows).

## 4. What will be expected of you

    - Be regular.
    - Ask any questions you might have.
    - Avoid excuses.

## 5. What's in it for you

Every student has his own take away from this. Some for new skills, some for career shift, some for moving abroad.

## 6. Topics covered in Basic Plan

    - Development Envionment
    - Linux
    - Programming (HTML, CSS, JavaScript, Node JS, Python, Ruby, C, Java)
    - Git/Github
    - Tooling
    - Frontend
    - Backend
    - Debugging
    - CI/CD
    - Deployment
    - Unit testing
    - Automation Testing

## 7. Topics covered in Advanced Plan

    - All of the above
    - Progressive Web Apps
    - Isomorphic Web Apps
    - Google Cloud Platform
    - Containerisation (Docker)
    - Heroku
    - Kubernetes

## 8. Topics covered in Super Advanced Plan

    - All of the above
    - Native app development
    - Deploying to Google Play Store
    - Marketing
    - SEO
    - Programming in depth
        - DataStructures
        - Algorithms

## 10. Register

Drop a mail to hi@jsdrome.com with subject: **Registration**


## 12. Read/Submit a feedback

Head over to our facebook page.
# What is jsDrome?

&nbsp;

Some time back in 2018, I wanted to create the perfect Web App boilerplate project. So I started creating a template from scratch wth everything configured. All I required to do is change some configurables to get a full fledged website. I called it `jsDrome`.

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


## Some other commands

// minikube
minikube status
minikube start --vm-driver=virtualbox
minikube dashboard
minikube service jsdrome2020-service --url
minikube stop

// kubectl create

kubectl create -f kubernetes/deployment.yml
kubectl create -f kubernetes/services.yml
kubectl create -f kubernetes/ingress.yml

or

kubectl create deployment jsdrome2020-deployment --image=jsdrome/jsdrome2020
kubectl expose deployment jsdrome2020-deployment --type=LoadBalancer --port=5000

// kubectl get

kubectl get deployments
kubectl get pods
kubectl get services
kubectl get secrets
kubectl get ingress

// kubectl delete

kubectl delete services jsdrome2020-service
kubectl delete deployment jsdrome2020-deployment
kubectl delete pod jsdrome2020-pod
kubectl delete ingress jsdrome2020-ingress

kubectl delete --all deployments
kubectl delete --all pods
kubectl delete --all services
kubectl delete --all ingress

// kubectl scale

kubectl scale -n default deployment jsdrome2020-deployment --replicas=4

// kubectl secret
kubectl create secret generic jsdrome2020-secrets --from-literal=PAYTM_KEY=qWzN4AATjzd8pRPC

// kubectl describe
kubectl describe deployments
kubectl describe secrets/jsdrome2020-secrets

// docker
docker ps -a
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker images
docker pull jsdrome/jsdrome2020
docker build
docker run -p 9000:5000 jsdrome/jsdrome2020
docker push

// docker-compose
docker-compose up --build
docker-compose -f docker-compose.yml up --build
docker-compose push

// Heroku
heroku container:login
git remote add heroku git@heroku.com:jsdrome.git
heroku container:push web --app jsdrome
heroku container:release web

// Helm

helm ls
helm install jsdrome .
helm uninstall jsdrome
helm get manifests jsdrome
helm upgrade jsdrome . --set replicaCount=5
helm upgrade jsdrome . --set containerName=sreeram/sreeram2020
helm rollback jsdrome 1


// Terraform

terraform plan -out myplan
terraform apply "myplan"
terraform destroy
