// var mongoose = require('mongoose');
// var User = require('../data/db').User;
// var express = require('express');
// var router = express.Router();

// router.get('/login', function(req, res){
//     res.send("hello from login server");
// });

// router.post('/signup', function(req, res){
//     let user = new User(req.body);
//     user.save(function(err){
//         if (err) { console.log(err); }
//         console.log('SAVED!!!');
//         res.send('SUCCESS');
//     });
// });

// module.exports = router;
const _ = require('lodash');
const express = require('express');
var router = express.Router();
var {User} = require('../data/models/user');
var {authenticate} = require('../data/middleware/authenticate');

// POST /user/login {email, password}
router.post('/login', (req, res) =>{
	var body = _.pick(req.body,['username', 'password']);

	User.findByCredentials(body.email, body.password).then((user) => {
		return user.generateAuthToken().then((token) =>{
			res.header('x-auth', token).send(user);
		});
	}).catch((e) =>{
		res.status(400).send();
	});
});

// POST / user/signup    --- Create 
router.post('/signup',(req, res) =>{
	var body = _.pick(req.body, ['username', 'email', 'password']);
	var user = User(body);

	user.save().then(() => {
		return user.generateAuthToken();
	}).then((token) => {
		res.header('x-auth', token).send(user);
	}).catch((e) =>{
		res.status(400).send(e);
	})
});

// User Logout by delete token
router.delete('/logout', authenticate,(req, res) => {
	req.user.removeToken(req.token).then(() => {
		res.status(200).send();
	}, () => {
		res.status(400).send();
	});
});

module.exports = router;