const http = require('http');

const server = http.createServer((request, response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"})
    response.end("Hello demo 111 world!");

});

const port = process.env.PORT || 1337;

server.listen(port);

console.log("server running at http://localhost:%d",port)