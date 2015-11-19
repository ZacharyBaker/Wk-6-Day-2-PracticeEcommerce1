var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = Schema({
	
	name: String,
	price: Number
	
});

module.exports = mongoose.model('Product', Product);