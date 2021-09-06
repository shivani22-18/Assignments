const express = require ('express');
const router = express.Router();
const Fruit = require('../models/fruits');

//Q1a get a list of fruits from the db

router.get('/inventory', function(req,res,next){
    res.send({type:'GET'});
    console.log(req.body);
    console.log("You got GET request for whole databse");
});
 //Q1b display particular item
router.get('/inventory/:name', function(req,res,next){
    Fruit.findOne({name: req.params.name}).then(function(fruit){
        //console.log(req.body);
        
        res.send({fruit});
        console.log(req.body);
        
    });
    console.log("You got GET request for particular item");
});

//Q2 
router.post('/inventory', function(req,res,next){
    Fruit.create(req.body).then(function(fruit){
        res.send(fruit);
        console.log(req.body);

    }).catch(next);
    console.log("You got POST request");

});

router.put('/inventory', function(req,res,next){
    Fruit.updateMany(req.body).then(function(fruit){
        res.send({fruit});
    });
});

router.put('/inventory/:name', function(req,res,next){
    Fruit.updateOne({name: req.params.name}).then(function(fruit){
        res.send({fruit});
    });
    console.log("You got POST request");
});

router.delete('/inventory', function(req,res,next){
    Fruit.remove(req.body).then(function(fruit){
    res.send(fruit);
    });
});

router.delete('/inventory/:name', function(req,res,next){
    Fruit.findOneAndRemove({name: req.params.name}).then(function(fruit){
        res.send(fruit);
    });

});

module.exports = router;