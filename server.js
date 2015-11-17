var express = require('express');
var cors = require('cors');
var mongoJS = require('mongojs');
var bodyParser = require('body-parser');
var mongoDB = require('mongodb')


var db = mongoJS('ecommerce');
var products = db.collection('products');
var app = express();

app.use(bodyParser.json());
app.use(cors());



app.post('/products', function(req, res, next){
	products.insert(req.body, function(err, result){
		if(err) return res.send(err);
		else return res.status(200).json(result);
	})
});

app.get('/products', function(req, res, next){
	products.find(req.query, function(err, result){
		if(err) return res.send(err);
		else return res.status(200).json(result);
	})
});

app.put('/products', function(req, res, next){
	products.update({"_id": mongoJS.ObjectId(req.query.id)}, req.body, function(err, result){
		if(err) return res.send(err);
		else return res.status(200).json(result);
	})
});

app.delete('/products', function(req, res, next){
	products.remove({"_id": mongoJS.ObjectId(req.query.id)}, function(err, result){
		if(err) return res.send(err);
		else return res.status(200).json(result);
	})
});







app.use(express.static('./public'));

app.listen(4002, function(){
	console.log("listening on port 4002");
})