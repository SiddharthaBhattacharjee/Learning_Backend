//modules :
//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./3_module_names')
console.log(names);

const sayHi = require('./4_module_function')

const data = require('./5_module_export_as_we_go')

console.log("Data :",data);

sayHi(names.p1)
sayHi(names.p2)
sayHi(names.p3)
sayHi("Sara")
