# Webpack Common Config

&nbsp;

## Summary

Now that we have the webpack dev and the webpack prod configurations, we have some duplicate code in either of them. Lets move these to a file called `webpack.common.js` and include this during build time. So when we run the dev buid, it will run common + dev and when we run the prod build, it will run common + prod.

## Install
`npm i --save-dev webpack-merge`

## Configure

Create a file called `webpack/webpack.common.js` at the root and move any common code to this file. Also, make changes to the dev config and the prod config to include this.

## Code - webpack.common.js

    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      entry: {
        app: './src/index.js',
      },
      output: {
        path: path.resolve(__dirname, '../_dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      externals: {
        request: {
          commonjs: 'request',
          commonjs2: 'request',
        },
        os: {
          commonjs: 'os',
          commonjs2: 'os',
        },
        process: 'process',
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'My Website',
        }),
      ],
    };

## Code - webpack.dev.js

    const merge = require('webpack-merge');
    import commonConfig from './webpack.common';

    module.exports = merge(commonConfig, {
      mode: 'development',
    });

## Code - webpack.prod.js

    const merge = require('webpack-merge');
    const commonConfig = require('./webpack.common');

    module.exports = merge(commonConfig, {
      mode: 'production',
    });

## Execute

`./node_modules/.bin/webpack --env=prod --config=webpack/webpack.config.js`

or

`npx webpack --env=prod --config=webpack/webpack.config.js`


Commit and push.