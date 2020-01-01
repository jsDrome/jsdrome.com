const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: ['./src/server/prod.js'],
  },
  output: {
    path: path.resolve(__dirname, '../functions'),
    libraryTarget: 'commonjs2',
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
  target: 'node',
  externals: nodeExternals(),
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { from: 'templates/server.html', to: 'templates/server.html' },
      { from: 'posts', to: 'posts' },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        KEY: JSON.stringify(process.env.PAYTM_KEY || "abcdefghijklmnop"),
        NODE_ENV: JSON.stringify('production'),
        FIREBASE: JSON.stringify('true'),
      },
    }),
  ],
};