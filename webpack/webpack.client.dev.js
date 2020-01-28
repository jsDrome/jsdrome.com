const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.client.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: './_dist',
    port: 9000,
    compress: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/checksum': 'http://localhost:5000',
      '/data': 'http://localhost:5000',
      '/paymentprocess': 'http://localhost:5000',
      '/login': 'http://localhost:5000',
      '/logout': 'http://localhost:5000',
      '/userData': 'http://localhost:5000',
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './templates/client.html',
    }),
  ],
});