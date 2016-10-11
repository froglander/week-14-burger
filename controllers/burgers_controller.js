/*
Here is where you create all the functions that will do the routing for your app,
and the logic of each route.
*/

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var moment = require('moment');

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.all(function(data) {		
		var hndlbrsObj = {burgers: data };
		console.log(hndlbrsObj);
		res.render('index', hndlbrsObj);
	});
});

router.post('/burgers/create', function(req, res) {
	burger.create(['burger_name', 'devoured', 'date'], [req.body.name, false, moment().format("YYYY-MM-DD HH:mm:ss")], function() {
		res.redirect('/burgers');
	});	
});

router.put('/burgers/update/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;

	console.log("condition:", condition);

	burger.update({devoured: req.body.devoured }, condition, function() {
		res.redirect('/burgers');
	});
});

module.exports = router;