var fs = require('fs');
var path = require('path');

//first argument would be a directory name 
var pathName = process.argv[2];

//second argument filter the list to only files that end with txt.
var extensionTxt = "." + process.argv[3];

//fs.readdir(pathname, function(err,list) {}) 
// fs.readdir takes a pathname as its first argument and callback as its second.

//use https://nodejs.org/api/path.html#path_path_extname_path
fs.readdir(pathName, function(err, list) 
{
	if (err){
		console.log(err);
	}
	for (i = 0; i < list.length; i++) {
	
	if (path.extname(list[i]) === extensionTxt) {
		console.log(list[i]);
	} else{};
	
	}


});