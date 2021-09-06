//program that creates a txt file with the text passed as parameter.(till line 22)
var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req, res) {

 

    fs.writeFile('mytext.txt', `hey,ho!let's go`, function (err) {

        if (err) throw err;

        console.log('The file was saved!');

    });

 

});

server.listen(4055);

//3rd part 
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log("Request was made" + req.url);
    res.writeHead(200,{'content-type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

    fs.writeFile('mySuperText.txt', `It's a long way to the top`, function (err) {
        if (err) throw err;
        
    });
    
myReadStream.pipe(res);
});

server.listen(4055, '127.0.0.1');
console.log('The file was saved!');
    