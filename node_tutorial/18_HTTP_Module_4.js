const http = require('http');
const fs = require('fs');

const PORT = 3000;
const url = 'http://jsonplaceholder.typicode.com/posts';

http.createServer((req, res) => {
  http.get(url, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      const posts = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(posts));
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);
