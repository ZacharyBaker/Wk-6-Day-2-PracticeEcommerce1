var Product = require('../models/Product');

module.exports = {

	addProduct: function (req, res) {
		new Product(req.body).save(function (err, data) {
			if (err) res.status(500).send(err);
			else res.send(data);
		})
	},

	getProducts: function (req, res) {
		Product.find().then(function (response) {
			res.send(response);
		})
	},

	updateProductById: function (req, res) {
		Product.findByIdAndUpdate(req.params.id, req.body, function (err, updatedItem) {
			if (err) res.status(500).send(err);
			else res.send(updatedItem);
		})
			
	
	},

	deleteProductById: function (req, res) {
		Product.findByIdAndRemove(req.params.id, function (err, productItem) {
			if (err) res.status(500).send(err);
			else res.send(productItem);
		})
	}



}