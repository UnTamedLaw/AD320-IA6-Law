////var: 
//  function scoped
//  undefined when accessing a variable before it's declared
//
//let: 
//  block scoped
//  ReferenceError when accessing a variable before it's declared
//
//const:
//  block scoped
//  ReferenceError when accessing a variable before it's declared
//  can't be reassigned


//load http module

const http = require('http');

//want the contents(url) to be a string
const url = process.argv[2].toString();

//example
//https://nodejs.org/api/http.html#http_http_get_url_options_callback
//want it to be in string 
http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', console.log);
    res.on('error', console.error);
    
}).on('error', console.error);
