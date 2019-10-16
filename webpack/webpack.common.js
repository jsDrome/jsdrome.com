const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const optimization = require('./optimization');

const { URL, MANIFEST_SEED, PATHS } = require('../variables');

module.exports = {
  entry: {
    app: ['babel-polyfill', './client.js', ],
    vendor: ['react-dom'],
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
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.(svg|png|jpg|jpeg|gif|ico|webp)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
      { test: /\.md$/, exclude: /node_modules/, use: { loader: 'raw-loader' } },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, `../_dist/bundle.html`),
    }),
    new Visualizer({
      filename: './visualizer.html',
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      MANIFEST_SEED,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new RobotstxtPlugin(),
    new SitemapPlugin(URL, PATHS, {
      skipGzip: true
    }),
  ],
  optimization,
  target: 'web',
};