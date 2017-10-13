var mongoose = require('mongoose');
var User = require('server/data/db').User;
var express = require('express');
var router = express.Router();

router.get('/login', function(req, res){
    res.send("hello from login server");
});

router.post('/signup', function(req, res){
    let user = new User(req.body);
    user.save(function(err){
        if (err) { console.log(err); }
        console.log('SAVED!!!');
        res.send('SUCCESS');
    });
});

module.exports = router;