/*
Here is where you create all the functions that will do the routing for your app,
and the logic of each route.
*/

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.all(function(data) {
		console.log("router.get burgers:");
		console.log("data");
		console.log(data);
		var hndlbrsObj = {burgers: data };
		console.log(hndlbrsObj);
		res.render('index', hndlbrsObj);
	});
});

module.exports = router;