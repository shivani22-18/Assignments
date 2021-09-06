const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

// database connection
const dbURI = 'mongodb+srv://shivani22:Shivanisp1822@cluster0.sdeex.mongodb.net/rest_api';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(8082))
  .catch((err) => console.log(err));


app.use(bodyParser.json());
app.use(routes);

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});








// app.get('/', function(req, res){
//     console.log('Get requests');
//     res.send({"name":"apples"});
// });


// //listen for requests
app.listen(8081 , function(){
    console.log('now listening for requests');
});