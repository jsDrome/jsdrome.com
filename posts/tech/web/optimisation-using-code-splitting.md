# Optimisation using Code Splitting

&nbsp;

## Summary

This is a very important topic. Generally, you'd create a bundle file which will be referenced in a html file. But, as the source code gets bigger and bigger, the size of the bundle increases. And after every new release, the user has to download a new bundle which might be of a bigger size. Keep in mind that the new bundle contains largely the same code as before. This is because, 97% of a bundle is generally code from npm modules. Only 3% constitutes the actual source code you write. On subsequent releases, only this 3% changes. But with this approach, the browser still downloads an entirely new bundle. Now thats not efficient. If there was a way to split the bundle into 2 pieces, one from the npm modules and one from the actual source code, cache them on the users machine, have a mechanism where the browser updates only the source code, that will be much efficient.

Also, there might be cases when you have to update the version of a certain npm module. In this case, the browser downloads both the npm bundle and the new source code. This is not fully efficient either. If there was a way to split all the npm modules into individual modules, and a source code bundle, have a proper caching mechanism for each of them, the browser needs to download only that part which has changed. This is what we are going to achive here. We will split all the npm modules into individual files and a seperate file for the source code. Then, we will configure firebase to cache them for a long time.

Couple this with some PWA features and we have an amazingly performant app. We will see this later.

## Code

Create a file called `webpack/optimise.js` with the following code:

    module.exports = {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const index = 1;
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[index];
              return `npm/npm-${packageName.replace('@', '')}`;
            },
          },
        },
      },
    };

Import and add this config to the optimize section of the config.

## Execute

Run `npm run build:prod` and examine the output.

## Output

You can see that all the npm bundles have been put in an npm folder now.

![webpack code splitting](https://firebasestorage.googleapis.com/v0/b/zaxisapp.appspot.com/o/blog%2Fwebpack-code-splitting.png?alt=media&token=6ee856ca-c9d4-41c4-b4ab-c8ad94e9be0b "webpack code splitting")
