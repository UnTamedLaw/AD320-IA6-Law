const net = require('net');
const strftime = require('strftime');
//Port number supplied as first command-line argument
var portNumber= process.argv[2];

var server = net.createServer(function(socket)
    {
    
    //https://github.com/samsonjs/strftime/blob/master/Readme.md
    var time = strftime('%F %H:%M')
    
    //Newline and ended
    socket.end(time + "\n");
    })
server.listen(portNumber);
