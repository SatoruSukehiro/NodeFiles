const process = require('process')
const fs = require('fs')
const path = process.argv[process.argv.length-1]

function cat(path){
    
    return fs.readFile(path,"utf8", (err,data) => err ? console.log(`Error Reading ${path}: ${err}`): console.log(data))
}



