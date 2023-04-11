// code to read from json file

var fs = require('fs');

let dat = 0;
fs.readFileSync('./content/data.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data,'\n');
        dat = JSON.parse(dat);
    }
});

// converts string to object
console.log("Name : ", dat.name);
console.log("Age : ", dat.age);
console.log("Address : ", dat.address);