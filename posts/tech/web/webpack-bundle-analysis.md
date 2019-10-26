# Webpack Bundle Analysis

&nbsp;

## Summary

In the previous chapter, we saw how webpack bundles the souce code and we saw the emitted size of the assets (or bundle). It is important to keep your bundle to a low size. If not minified, uglified and compressed, the bundled file can be of great size which will have a direct impact on performance. Webpack bundle analyser is a plugin which will tell you what consumes all the size in the bundled file.

## Install

`npm install webpack-bundle-analyzer --save-dev`

## Configure

Add these lines to your `webpack.prod.js` in the `plugins` section.

## Code

    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

    ...
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: path.resolve(__dirname, `../dist/bundle.html`),
      }),
    ]

## Execute
`./node_modules/.bin/webpack --env=prod --config=webpack/webpack.config.js`

or

`npx webpack --env=prod --config=webpack/webpack.config.js`

You can see a file called `bundle.html` in the dist folder once the prod build has been successfully completed. Open it to understand which packages take up the most space. It will look something like this below.

![bundle analysis output](/img/bundle-analysis-output.jpg "bundle analysis output")

Commit and push.

# Webpack Bundle Analysis

&nbsp;

## Summary

In the previous chapter, we saw how to use the bundle analysis plugin to see which package consumes the most space. In this chapter, we will look at another plugin - Webpack Visualizer plugin which gives a better visual of space consumption. Personally, I prefer this over bundle analysis plugin because it gives the output in the form of a pie chart.

## Install

`npm install webpack-visualizer-plugin --save-dev`

## Configure

Add these lines to your `webpack.prod.js` in the `plugins` section.

## Code

    const Visualizer = require('webpack-visualizer-plugin');

    ...
    plugins: [
      new Visualizer({
        filename: './visualizer.html',
      }),
    ]

## Execute
`./node_modules/.bin/webpack --env=prod --config=webpack/webpack.config.js`

or

`npx webpack --env=prod --config=webpack/webpack.config.js`

You can see a file called `visualizer.html` in the dist folder once the prod build has been successfully completed. Open it to understand which packages take up the most space. It will look something like this below.

![visualizer output](/img/visualizer-output.jpg "visualizer output")

Commit and push.
