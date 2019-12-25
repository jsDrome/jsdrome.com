# Webpack Common Config

&nbsp;

## Summary

Now that we have the webpack dev and the webpack prod configurations, we have some duplicate code in either of them. Lets move these to a file called `webpack.common.js` and include this during build time. So when we run the dev buid, it will run common + dev and when we run the prod build, it will run common + prod.

## Install
`npm i --save-dev webpack-merge`

## Configure

Create a file called `_webpack/webpack.common.js` at the root and move any common code to this file. Also, make changes to the dev config and the prod config to include this.

## Code - webpack.common.js

    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      entry: {
        app: './src/client/index.js',
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
      plugins: [
        new HtmlWebpackPlugin({
          title: 'My Website',
          template: path.resolve(__dirname, 'template/template.html'),
        }),
      ],
    };

## Code - webpack.dev.js

    const merge = require('webpack-merge');
    const commonConfig = require('./webpack.common');

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

`npx webpack --env=prod --config=_webpack/webpack.config.js`


Commit and push.