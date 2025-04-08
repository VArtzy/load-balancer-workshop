const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('App2: Hello from 7777');
});

server.listen(7777);
