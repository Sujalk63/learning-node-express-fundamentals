const { log } = require('console');
const {readFile, writeFile, read} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first = result;
    // console.log(first) 
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        // console.log(second)
        writeFile('./content/result-async.txt', `here is the result: ${first} ${second}`, {flag: 'a'}, (err, result)=>{
            if(err){
                console.log(result);
                return;
            }
            console.log(result)
        })
    })
})