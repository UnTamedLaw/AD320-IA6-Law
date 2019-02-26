var fs = require('fs');
var path = require('path');


//moudle.exports with the three arguments
module.exports = function(dirName, extensionTxt, callback) 
{
    fs.readdir(dirName, function(err, list){
        
        if (err) {
            return callback(err);
        }
        list = list.filter(function (file) {
            return path.extname(file) ===extensionTxt
        })
        
        callback(null, list);
    })
    
    
}