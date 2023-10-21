// files system module has two flavours asynchronously which is non-blocking and synchronously blocking 

// synchronous approach 

const { readFileSync, writeFileSync, read } = require("fs") //another approach to use modules 

// const fs = require("fs")
// fs.readFileSync
// fs.writeFileSync  we just destructured it above 



// reading a fiole with FS module

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first);
console.log(second);


// the second argument is the encoding parameter. It specifies the character encoding used to interpret the file's contents. If the encoding parameter is provided, the method returns a string. If the encoding is not specified, or if it is set to null, readFileSync returns a Buffer object.
// utf8 simply means the current file will be read as a string however we have many encoding parameters


// writting files using FS

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'}) //if there is no such file the fs will create one and fill the data

// The flag: 'a' option stands for "append". When you use 'a' as the flag, it means that if the file specified in the path ('./content/result-sync.txt' in this case) exists, the new data will be appended to the end of the existing file content


const reading = readFileSync('./content/result-sync.txt', 'utf8')
console.log(reading); //reading the newly created file



