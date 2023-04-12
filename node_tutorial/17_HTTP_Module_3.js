const http = require('http');
const fs = require('fs');

const url = 'http://jsonplaceholder.typicode.com/posts';

http.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const posts = JSON.parse(data);
    fs.writeFile('posts.json', JSON.stringify(posts), (err) => {
      if (err) throw err;
      console.log('Data written to file');
      fs.readFile('posts.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Data retrieved from file:');
        console.log(JSON.parse(data));
      });
    });
  });
}).on('error', (err) => {
  console.log(`Error: ${err.message}`);
});
