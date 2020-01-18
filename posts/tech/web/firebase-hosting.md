<img src="https://firebasestorage.googleapis.com/v0/b/jsdrome.appspot.com/o/firebase_head-750x354.png?alt=media&token=c461a29c-7716-42ec-8d9d-20a55503404f" title="firebase hosting" class="post-first-image" />

## Setup

Sign up to Firebase and create a new project.


## Install

`npm i -g firebase-tools`


## Login

`firebase login`

## Initialise firebase in your project

`firebase init`

It asks you a few setup questions and creates 2 files with the following content: firebase.json and .firebaserc

    {
      "hosting": {
        "public": "_dist",
        "ignore": [
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ],
        "rewrites": [
          {
            "source": "**",
            "destination": "/index.html"
          }
        ]
      }
    }

Make sure to change values according to your setup

    {
      "projects": {
        "default": "jsdrome-batch-1"
      }
    }

## Deploy

`firebase deploy`