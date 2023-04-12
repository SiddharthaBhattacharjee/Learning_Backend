const http = require('http');

const url = 'http://jsonplaceholder.typicode.com/posts';

http.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const posts = JSON.parse(data);
    console.log(posts);
  });
}).on('error', (err) => {
  console.log(`Error: ${err.message}`);
});
