# JSDOC Configuration

&nbsp;

## Summary

Generate documentation of the code using JSDoc.

## Install

`npm i --save-dev jsdoc`

## Configure

Create a file called `jsdoc.js` at root.

    module.exports = {
      "tags": {
        "allowUnknownTags": true,
      },
      "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_",
      },
      "plugins": [],
    };

## Execute

Add an npm script as follows

    ...
    "docs": "jsdoc src/components/**/*.js -c jsdoc.js"

