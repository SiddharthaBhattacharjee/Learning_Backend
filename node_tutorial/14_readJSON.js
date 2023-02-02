// code to read from json file

var fs = require('fs');

fs.readFile('./content/data.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});