const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    port: 9000,
    compress: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/checksum': 'http://localhost:5000',
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
      template: path.resolve(__dirname, '../templates/client.html'),
    }),
  ],
});