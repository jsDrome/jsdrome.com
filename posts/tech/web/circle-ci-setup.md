<img src="https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fundraw_following_q0cr.svg?alt=media&token=dace89b1-505d-4d83-9599-b1c05b1c8faa" title="browser-extensions" class="post-first-image" />

# How to integrate your code with Circle CI

&nbsp;

Sign up to Circle CI and have it build your code. It will fail the first time because we dont have a configuration in our codebase yet.

Add the below code into ./circleci/config.yml


## Quick Javascript switcher

    version: 2
    jobs:
      build:
        working_directory: ~/repo
        docker:
          - image: circleci/node:8-browsers
        steps:
          - checkout
          - restore_cache:
              keys:
                - v1-deps-{{ .Branch }}-{{ checksum "package.json" }}
                - v1-deps-{{ .Branch }}
                - v1-deps
          - run:
              name: Install dependencies
              command: npm install
          - save_cache:
              key: v1-deps-{{ .Branch }}-{{ checksum "package.json" }}
              paths:
                - node_modules
                - ~/.npm
                - ~/.cache
          - run:
              name: Build
              command: npm run build:client:prod

    workflows:
      version: 2
      build_and_activate:
        jobs:
          - build

This code tells Circle CI to execute the steps mentioned in the file every time code is pushed.

Commit and push it to trigger the CI process. If it succeeds, you will see a tick mark against your commit.