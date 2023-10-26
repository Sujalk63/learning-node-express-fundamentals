// basics of http, will learn more on later codes

const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url == '/home'){
        res.end('Welcome to our homepage')
    }
    if(req.url == '/about'){
        res.end('here is our about')
    }
    res.end('<h1> OOPS! </h1> <p> we cant seem to find the page you are looking for, <a href="/home">back home </a>' )
    
})

server.listen(5000)

// open local host 5000 on your web-browser


// both res.write() and res.end() being used together to send multiple chunks of data followed by the final chunk, which is sent using res.end(). It's essential to call res.end() to signal the end of the response and complete the communication with the client's browser.

