//----------------the OS module-------------------// 


const { log } = require('console')
const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user);

// this would print the info about the user which is me 

// -> to display the systemUptime we have os.uptime module 

console.log(`The System uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS); //would give the type, relese, total memory and leftover memory




//----------------the path module-------------------//


const path = require('path')

console.log(path.sep); //would display the separator of the path that is "/" 

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base); //would print the base of the filepath in this case test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute); //will give the absolute path from users till the test.txt




