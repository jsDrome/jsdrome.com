/* eslint-disable no-magic-numbers */
/* eslint-disable-next-line no-console */

import app from './app';

const port = process.env.PORT;

app.listen(port);
console.log(`SERVER: Listening on port ${port}`);
