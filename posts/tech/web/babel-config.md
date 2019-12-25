# Configure Babel

&nbsp;

## Summary

Not all browsers support the newer features of Javascript. So, if we are to use some of the latest features, we need to make sure that we convert them to browser readable form. Compilers like babel do just that.
When webpack builds our javascript code, we specify babel-loader as the module parser. It uses a `.babelrc.js` file located at root for its configuration properties.

## Install

    npm i --save-dev @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/preset-react babel-plugin-istanbul babel-eslint babel-loader

## Configure

Create a file called `.babelrc` at the root with the following code.

## Code

    {
      "presets": [
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "targets": {
              "chrome": "41",
              "ie": "10",
            }
          }
        ]
      ],
      "plugins": [
        "istanbul",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-transform-runtime", {
          "regenerator": true
        }]
      ]
    }

Commit and push.

Now, lets implement the bundling process.
