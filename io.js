// load global fs module into the variable fs
var fs = require('fs');

//first element is always node, second element is always file path, third element is the start of the contents
var path = process.argv[2]

//Method will return a buffer object containing the complete contents of the file. 
var file = fs.readFileSync(path);
//Buffer objects represent arbitrary arrays of data. Need to convert to string.
//Split \n 
file = file.toString().split('\n');

//subtract one because there isn't a newline character at the end
console.log(file.length-1);

//post submission
// note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

─────────────────────────────────────────────────────────────────────────────
