const http = require('http');
const express = require('express');

const app = express();

app.use(express.static(`${process.cwd()}/docs`));

console.log(
`
********************* AXA CH **************************
Server is running on http://localhost:3000.

Please open http://localhost:3000 in your browser of
coice and happy coding :)
*******************************************************
`
);


http.createServer(app).listen(3000);
