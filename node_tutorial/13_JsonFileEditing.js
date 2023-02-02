// code to add data to a json file

var fs = require('fs');

var data = {
    "name": "John Doe",
    "age": 25,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA"
    }
};

fs.writeFile('./content/data.json', JSON.stringify(data), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("JSON saved to data.json");
    }
});
// Path: 14_JsonFileReading.js
// code to read data from a json file
