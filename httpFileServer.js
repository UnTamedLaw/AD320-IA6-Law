const http = require('http');
const fs = require('fs');

var portNumber = process.argv[2];

//very similar to TCP server
var server = http.createServer(function (request, response) 
    //response.writeHead(statusCode, [reasonPhrase], [headers])
    {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
    
    // You must use the fs.createReadStream() method to  stream the file contents to the response. 
    //i could create a variable for argv[3] 
        fs.createReadStream(process.argv[3]).pipe(response);
    }).listen(portNumber);