# Clean Webpack Plugin

&nbsp;

## Summary

This is an optional plugin used to remove the build folders before/after the build process is complete. I like to keep things clean.

## Install

`npm i clean-webpack-plugin --save-dev`

## Configure

Add this to the plugins section of webpack config. Ideally into the common config.

    const CleanWebpackPlugin = require('clean-webpack-plugin');
    ...
    plugins: [
      new CleanWebpackPlugin(),
    ],