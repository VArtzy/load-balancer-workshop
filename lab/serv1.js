const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('App1: Hello from 4444');
});

server.listen(4444);
