const {readFileSync, writeFileSync} = require('fs');
// This is how we can import multiple methods from a module

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// This is how we can read a file synchronously

writeFileSync("./content/result-sync.txt", `\nHere is the result:\n${first} \n${second}` , {flag: 'a'});
// This is how we can write a file synchronously

console.log(first, second);