var fs = require('fs');

var path = process.argv[2];

var file = fs.readFile(path, 'utf8', function(err, content)
 {
 	if (err) {
 	return console.log(err)
 	}
 	
 	console.log(content.split('\n').length -1);
});