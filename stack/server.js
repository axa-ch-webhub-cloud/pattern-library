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

console.log(
`
************* AXA CH SIMULATING ENV: ${ENV} *************
Server is running on http://localhost:3000.

Please open http://localhost:3000 in your browser of
coice and happy coding :)
*********************************************************
`
);

processOnClose = () => {
  
}

process.on('exit', )


http.createServer(app).listen(3000);
