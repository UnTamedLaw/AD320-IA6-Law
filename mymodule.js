//require first file
var myModule = require('./modular.js');

//dir name is from contents of file
var dirName = process.argv[2];

//filter
var extensionTxt = process.arg[3];

//1. three arguments, directory name, filename extension, and callback function

myModule(dirName, extensiontxt, function(err, list)
{
    //2. error check
    if (err) {
        return console.log(err);
    }
    //3. don't change anything else
    //4. handle all errors that may occur
    list.forEach(function(contractFile) {
        console.log(file);
                
})
  
})


    