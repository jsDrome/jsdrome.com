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

![karma html output](/img/karma-html-output.jpg "karma html output")