# Enforce commit message linting

&nbsp;

## Summary

In this post, we will see how we can enforce ourselves and others working on the project to follow the same practice when it comes to commit messages. Commit messages are the history of your application. If you want to go back to a historical commit or cherry-pick a certain fix from a different branch, its imperative that we have good commit messages. Commitlint and Husky come to the rescue. Before we see how these work, we need to understand what githooks are. In short, these are hooks you can cling on to at specific points while using git. For eg, the pre-commit hook can be used to do something just before anyone commits anything. Like show a message "Hey, thanks for contributing." or something.

## Install commitlint cli and husky
`npm install --save-dev @commitlint/config-conventional @commitlint/cli husky`

## Configure

The next step is to install husky to lint commits before they are created.  You can use Husky's 'commit-msg' hook:

    {
      "husky": {
        "hooks": {
          "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
      }
    }

With this, any commit messages will be checked for lint errors.

Also, create a file called `commitlint.config.js` with the following content:

    module.exports = { extends: [ '@commitlint/config-conventional' ] };

## How I do it in my projects

In my projects, during a commit, I show a desktop notification 'Are you being a resposible commitizen?' Which is followed by another notification indicating if it passed or failed. I use the `notify` npm package to achieve this and below is my husky configuration.

    "husky": {
      "hooks": {
        "pre-commit": "./node_modules/.bin/notify -t 'Notification' -m 'Are you being a responsible commitizen?'",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        "post-commit": "./node_modules/.bin/notify -t 'Notification' -m 'Commit Successful' -s Glass"
      }
    },

## Extra

Add a badge to your repo like: [![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

    [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
