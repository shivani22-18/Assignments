var fs = require ('fs');
var nameFile = "friendscast.txt";
var textToWrite = 'ross,monica,rachel,chandler,joey,phoebe'

fs.writeFile(nameFile, textToWrite, function(err) {
  if (err) throw err;
  console.log('The file was saved!');
});

fs.readFile(nameFile, 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});