const http = require('http');
const constants = require('./constants');
const express = require('express');
const readline = require('readline');
const compression = require('compression');

const ENV = process.argv[2]; // second element is the first argument.

const app = express();

if (ENV === constants.ENV.PROD) {
  app.use(compression({ filter: shouldCompress }));
  app.use(express.static(`${process.cwd()}/dist`));
} else {
  app.use(express.static(`${process.cwd()}/.tmp`));
}

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
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

if (process.platform === 'win32') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

process.on('SIGINT', processOnClose);
