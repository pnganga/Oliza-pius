var express = require('express');  
var app = express();

// express middleware
var csv = require("ya-csv");
var fs = require('fs');
var bodyParser = require('body-parser');

// include mongoose
var mongoose = require('mongoose');
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/Oliza-test';

mongoose.connect(uristring, function(err){
	if (err) {
		console.log('Error connecting to: ',uristring);
	}
})


// // model......schema
// var clientSchema = mongoose.Schema({
//   name: String,
//   age: Number

// })

// // compile the model
// var Client = mongoose.model('Client', ClientSchema);

// parse the csv file
var reader = csv.createCsvFileReader('clientlist.csv', {columnsFromHeader:true,'separator':   ','});
reader.addListener('data', function(data){
var nameHolder = data.name;

mongoclient.db(nameHolder).collection('assets').update({assetId:data.assetId,name:data.name},{upsert:true},function(err,updated){if(err){console.log(err)}});

reader.addListener('end', function(data){
console.log("done");
})




// testing server
// app.get('/', function(req, res){

// 	res.send("hello world");

// });

var server = app.listen(8080, function(){
	console.log("server running")
})