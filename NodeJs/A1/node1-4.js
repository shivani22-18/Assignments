var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req, res) {

 

    fs.writeFile('message.txt', `hey,ho!let's go`, function (err) {

        if (err) throw err;

        console.log('The file was saved!');

    });

 

});

server.listen(8080)

