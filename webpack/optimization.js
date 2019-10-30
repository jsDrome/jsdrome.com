module.exports = {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    // maxInitialRequests: Infinity,
    // minSize: 0,
    // cacheGroups: {
    //   vendor: {
    //     test: /[\\/]node_modules[\\/]/,
    //     name(module) {
    //       const index = 1;
    //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[index];
    //       return `npm/npm-${packageName.replace('@', '')}`;
    //     },
    //   },
    // },
  },
};