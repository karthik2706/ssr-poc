
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public-aem'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.PORT || 8089;
app.listen(port);
console.log('App Started on port ' + port);