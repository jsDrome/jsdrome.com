# Webpack Dev Server

&nbsp;

## Summary

In the previous chapter, we generated the dev bundle and a html file referencing the bundled file. You could double click and open the html file and see the output but thats not what we intend to do. Our goal is to deploy it in a server so that users will be able to access it via the internet. So, we need to deploy it in a webserver accessible by all. But, for development purposes, lets create a mock server.

Webpack-dev-server is a powerful tool which creates a development server with live reloading. This eliminates the need for us to create and start your own server. Webpack-dev-server does this work for us. (Note that this is not to be confused with Hot Module replacement which is a different topic.). Our aim here is to write code, save it and refresh the browser to see the updated app.

**Note**: Use this in development mode only.

## Install

`npm install webpack-dev-server --save-dev`

## Configure

Add this to your webpack.dev.js

## Code

    const path = require('path');

    ...
    devServer: {
      contentBase: path.join(__dirname, '../_dist'),
      compress: true,
      port: 9000,
    },

Webpack-dev-server opens an express server internally and serves at the specified port, 9000 in this case.

When compress is set to false, it sends the raw files across. If you look closely at the image below from the Chrome dev tools, you can see that there is no compression.

![webpack-dev-server-no-compress-network](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-dev-server-no-compress-network.png?alt=media&token=5aede7b6-4826-4fe5-9f7c-cc227597d122 "webpack-dev-server-no-compress-network")

And the headers in the response is like below.

![webpack-dev-server-no-compress-header](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-dev-server-no-compress-header.png?alt=media&token=10acd047-7f92-4e7e-aa57-3b9467d324d0 "webpack-dev-server-no-compress-header")


When its set to true, it gzip compresses the files and sends a `content-Encoding: gzip` header along with the responses.

![webpack-dev-server-compress-network](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-dev-server-compress-network.png?alt=media&token=f89dc725-509b-4a58-a2e0-227cbed99a22 "webpack-dev-server-compress-network")

And the headers in the response is like below.

![webpack-dev-server-compress-header](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-dev-server-compress-header.png?alt=media&token=eee907eb-ebbf-4971-924f-690a1c18ef41 "webpack-dev-server-compress-header")

## Execute
`npx webpack-dev-server --open --env=dev --config=webpack/webpack.config.js`

And now, it spawns up the browser and we see the output. Phew!.

Commit and push.
