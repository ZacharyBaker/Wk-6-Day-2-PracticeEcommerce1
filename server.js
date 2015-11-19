var express = require('express');
var cors = require('cors');
// var mongoJS = require('mongojs');
var bodyParser = require('body-parser');
// var mongoDB = require('mongodb')
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost:27017/ecommerce'
// var db = mongoJS('ecommerce');
// var products = db.collection('products');
var productCtrl = require('./controllers/productCtrl');

var app = express();

app.use(bodyParser.json());
app.use(cors());



app.post('/products', productCtrl.addProduct);

app.get('/products', productCtrl.getProducts);

app.put('/products/:id', productCtrl.updateProductById);

app.delete('/products/:id', productCtrl.deleteProductById);







app.use(express.static('./public'));



app.listen(4002, function(){
	console.log("listening on port 4002");
})

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('connected to MongoDb at ' + mongoUri);
})