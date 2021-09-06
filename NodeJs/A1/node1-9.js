var fs = require('fs');

var read = fs.createReadStream(__dirname+'/readme.txt', 'utf-8');
var mywritestream= fs.createWriteStream(__dirname+'/writeMe.txt');

read.on('data',function(readdata)
{
        console.log("the data is read and written successfully!!")
       mywritestream.write(readdata);}
    );

