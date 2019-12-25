# Unit testing using Karma, Jasmine & Enzyme

&nbsp;

## Install

`npm i --save-dev enzyme enzyme-adapter-react-16 jasmine-core karma karma-browserstack-launcher karma-chrome-launcher karma-coverage karma-inject-html karma-jasmine karma-mocha-reporter karma-sourcemap-loader karma-webpack inject-html`

## Configure

`karma.conf.js`

    const webpackConfig = require('./webpack/webpack.test');

    module.exports = function (config) {
      config.set({
        basePath: '.',
        autoWatch: false,
        singleRun: true,
        browsers: [ 'ChromeHeadless' ],
        frameworks: [ 'jasmine' ],
        files: [
          'src/test.js',
        ],
        preprocessors: {
          'src/**/*.js': [ 'webpack', 'inject-html' ],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
          noInfo: true,
          stats: 'error-only',
        },
        injectHtml: {
          file: 'templates/test.html',
        },
        reporters: [ 'coverage', 'progress', 'mocha' ],
        coverageReporter: {
          includeAllSources: true,
          reporters: [
            { type: 'html', subdir: 'test' },
            { type: 'lcovonly', subdir: '.', file: 'test/lcov.txt' },
            { type: 'text-summary' },
          ],
          dir: `./_dist`,
        },
      });
    };

`src/test.js`

    const testsContext = require.context(".", true, /test$/);
    testsContext.keys().forEach(testsContext)


`src/components/App/App.test.js`

    describe("some", () => {
      it("should run tests", () => {
        expect(true).toBe(true);
      });
    });

`webpack/webpack.test.js`

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


`package.json`

    "test": "karma start",
    "test:dev": "karma start --auto-watch=true --single-run=false"

## Output

![karma console output](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fkarma-console-output.png?alt=media&token=78f0e475-122f-48de-bbd2-57908f56dbef "karma console output")
