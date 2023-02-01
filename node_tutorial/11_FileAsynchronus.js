const {readFile , writeFile} = require('fs');

let data;

readFile('./content/first.txt','utf8', (err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = res;
    readFile('./content/second.txt','utf8', (err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/result-async.txt', `\nHere is the result:\n${first} \n${second}` , {flag: 'a'}, (err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("File written successfully");
        })
    })
})
