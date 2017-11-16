const http = require('http');
const constants = require('./constants');
const express = require('express');

const ENV = process.argv[2]; // second element is the first argument.

const app = express();

if (ENV === constants.ENV.PROD) {
  app.use(express.static(`${process.cwd()}/dist`));
} else {
  app.use(express.static(`${process.cwd()}/.tmp`));
}

const port = ENV === constants.ENV.PROD ? '8080' : '3000';

console.log(`
************* AXA CH SIMULATING ENV: ${ENV} *************
Server is running on http://localhost:${port}.

Please open http://localhost:${port} in your browser of
coice and happy coding :)
*********************************************************
`);

const server = http.createServer(app);

server.listen(port);

const processOnClose = () => {
  server.close();
};

process.on('uncaughtException', processOnClose);
process.on('SIGTERM', processOnClose);
