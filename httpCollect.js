//as specified bl is buffer list, it collects data. 
const bl = require('bl');
const http = require('http');

var url = process.argv[2];

//use  http get, sets method to GET and calls req.end() automatically (only difference between http.request())
http.get(url, function (res) {
    //stream piped in, a callback will be fired after the stream is ended
    res.pipe(bl(function (err, data)
        {
            //standard error message
            if(err){
            return console.error(err("error"));
            }      
        //Convert buffer to string.
        data = data.toString();
        // first line should be an integer representing the # of characters
        console.log(data.length);
        // second line contains the complete String of characters
        console.log(data);
        }))
});
