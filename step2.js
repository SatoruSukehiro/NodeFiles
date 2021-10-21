const process = require('process')
const fs = require('fs')
const path = process.argv[process.argv.length-1]
const axios = require('axios')
function cat(path){
    
    return fs.readFile(path,"utf8", (err,data) => err ? console.log(`Error Reading ${path}: ${err}`): console.log(data))
}




async function webCat(path){
    try {
        let response = await axios.get(path)
        console.log(response.data)  
    } catch (error) {
        console.log(`-----------------${error}-----------------`)
    }
    

}

if(path.indexOf('http') > -1){
    webCat(path)
} else {
    cat(path)
}

