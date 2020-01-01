# Code coverage using Istanbul

&nbsp;

## Install

`npm  i --save babel-plugin-istanbul`

## Configure

Update `.babelrc` to include the plugin.

    {
      "presets": ["@babel/preset-react"],
      "plugins": [
        "istanbul",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
      ]
    }

## Execute

Run `npm run test`. It will generate the test coverage report on the console as well as an html and several other files. The output of the html report looks something like this:


## Output

![karma html output](https://firebasestorage.googleapis.com/v0/b/jsdrome.appspot.com/o/karma-html-output.jpg?alt=media&token=4d3231c9-bfe1-46b0-80af-5b97646ccaea "karma html output")