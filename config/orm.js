var connection = require('./connection.js');

function printQuestionMarks(num) {
	var array = [];

	for (var i = 0; i < num; i++) {
		array.push('?');
	}

	return array.toString();
}

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if(err) throw err;
			cb(result);
		});

	},
	updateOne: function(tableInput) {

	}
};

module.exports = orm;