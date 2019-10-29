# Sourcemaps

&nbsp;

## Summary

While debugging an error, because the bundled file is in a minified and mangled state, it becomes cumbursome to find which part of your code generated the error. In such a scenario, wouldnt it be nice to have a mapping of the bundled code and the actual source code? Thats exactly what soucemaps do. While bundling, webpack maintains a mapping of the generated bundle and the actual source code.

Lets try this.

## Error

Introduce an error in the code like this. Modify the entry point `src/index.js`.

    render(<App />, document.getElementById('root2'));

Run webpack-dev-server.

`npx webpack-dev-server --open --env=dev --config=webpack/webpack.config.js`

This will open the browser but you wont see anything. Open the console and you will see an error like below because our template doesnt have a div with id='root2'.

![webpack error](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-error.png?alt=media&token=277b4ace-e8c2-4d45-ad80-cb306c377d00 "webpack error")

If you look closely, the error doesn't say where it originates from. This is what we are going to solve using sourcemaps.

## Enable sourcemaps to debug issue

Modify `webpack.dev.js` to include the below code

    ...
    devtool: 'inline-source-map',

Run webpack-dev-server again. This time, the error looks a bit different like this:

![webpack sourcemap](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-sourcemap.png?alt=media&token=06d97ea8-3ac3-41f5-92cc-546d2e16da43 "webpack sourcemap")

Now if you look closely, the error tells where it originates from. Go to the sources tab and press `cmd+p`. Search for `index.js`. You will be able to see and debug your code which you wouldn't have been able to see without sourcemaps enabled. You can now spot the error and fix it.

![webpack sourcemap debugging](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-sourcemap-debugging.gif?alt=media&token=9eeaba0d-f420-49b2-962a-1162bafe7447 "webpack sourcemap debugging")

Undo the error, commit and push.
