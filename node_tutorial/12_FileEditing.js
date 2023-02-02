const {readFileSync,writeFileSync} = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, 'content', 'editable.txt');

const prevData = readFileSync(filepath, 'utf8');

let otp = ""

for(let i=0;i<6;i++){
    let rands = Math.random()*10;
    let digit = Math.floor(rands);
    otp = otp + digit;
}

console.log('Old Data: \n',prevData)
let parts = prevData.split(':');
let newData = parts[0] +": "+ otp;
console.log("\nNew Data:\n",newData);
writeFileSync(filepath,newData,'utf8');
