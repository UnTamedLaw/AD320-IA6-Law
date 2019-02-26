var fs = require('fs');
var path = require('path');


//moudle.exports with the three arguments
module.exports = function(dirName, extensionTxt, callback) 
{
    fs.readdir(dirName, function(err, list){
        
        if (err) {
            return callback(err);
        }
        list = list.filter(function (contractFile) {
            return path.extname(contractFile) === "." + extensionTxt;
        })
        
        callback(null, list);
    })
    
    
}