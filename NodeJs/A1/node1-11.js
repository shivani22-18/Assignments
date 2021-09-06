var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log("Request was made" + req.url);
    res.writeHead(200,{'content-type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    
myReadStream.pipe(res);
});

server.listen(4050, '127.0.0.1');
console.log('Listening to port 4050');

