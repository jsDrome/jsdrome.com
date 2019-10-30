# Folder structure

&nbsp;

`.circleci` circle ci configuration goes here

`.env/env.sh` environment variables here in a file called env.sh (Do not commit it)

`cypress` crypress test files

`functions`

Firebase expects the server files to be present here. When you build your server source code, it gets put here. You normally wouldnt have to touch anything here. There will only be a package.json and package-lock.json in it. If any new package gets added in your server source code, you will have to update the package.json here also.


`images` All custom images go here.

`karma` Karma configuration for unit testing and browserstack testing.

`posts` The markdown files for the blog posts are to be put here.

`puppeteer` Puppeteer test files are located here.

`src`

 - `client` client source code.

 - `server` server source code.

 - `theme.js` Theme file.

 - `variables.js` All variables and config values.

`templates`

`ads.txt` For adsense. This gets copied to production client bundle just like that.

`client.html` Serves as the index file for the dev build used by html-webpack-plugin.

`server.html` Serves as the index file served by the server in production.

`test.html` A html template file for karma unit tests.

`webpack`
All webpack configurations go here.

