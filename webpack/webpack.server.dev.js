const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: ['./src/server/dev.js'],
  },
  output: {
    path: path.resolve(__dirname, '../src/server'),
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
  mode: 'development',
  plugins: [
    new CopyPlugin([
      { from: 'templates/server.html', to: 'templates/server.html' },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        KEY: JSON.stringify(process.env.PAYTM_TEST_KEY),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};