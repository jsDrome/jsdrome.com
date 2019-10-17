const webpackConfig = require('../webpack/webpack.test');

module.exports = function (config) {
  config.set({
    basePath: '..',
    autoWatch: false,
    singleRun: true,
    browsers: [ 'ChromeHeadless' ],
    frameworks: [ 'jasmine' ],
    files: [
      './src/test.js',
    ],
    preprocessors: {
      './src/**/*.js': [ 'webpack', 'inject-html' ],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'error-only',
    },
    injectHtml: {
      file: './templates/test.html',
    },
    reporters: [ 'coverage', 'progress', 'mocha' ],
    coverageReporter: {
      includeAllSources: true,
      reporters: [
        { type: 'html', subdir: 'reports' },
        { type: 'lcovonly', subdir: '.', file: 'reports/lcov.txt' },
        { type: 'cobertura', subdir: '.', file: 'reports/cobertura.xml' },
        { type: 'text-summary' },
      ],
      dir: `./_test`,
    },
  });
};