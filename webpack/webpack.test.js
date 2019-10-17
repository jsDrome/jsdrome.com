module.exports = {
  mode: 'development',
  devtool: 'none',
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
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.(svg|png|jpg|jpeg|gif|ico|webp)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
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
};