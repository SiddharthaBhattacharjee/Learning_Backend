const {readFileSync, writeFileSync} = require('fs');
// This is how we can import multiple methods from a module

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// This is how we can read a file synchronously

writeFileSync("./content/result-sync.txt", `\nHere is the result:\n${first} \n${second}` , {flag: 'a'});
// This is how we can write a file synchronously

console.log(first, second);

/*
Note:
Here the file operations are syncronus , i.e. The code will wait for the file to be read or written before moving on to the next line. which is not good for performance.
This is not the case with the asyncronus file operations.

*/