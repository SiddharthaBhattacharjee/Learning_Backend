//GLOBALS

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log("Dirname: ", __dirname)
console.log("Filename: ", __filename)
console.log("Require: ", require)
console.log("Module: ", module)
console.log("Process: ", process)

setInterval(() => {
    console.log("Hello World")
}, 1000)