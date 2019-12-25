<img src="https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Ffirebase_head-750x354.png?alt=media&token=14d23c8e-2e2a-4f87-af1b-397b9a9be35e" title="firebase hosting" class="post-first-image" />

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

`firebase deploy --hosting`