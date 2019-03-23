var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public/dist/public')); 

require('./server/config/mongoose.js');
let route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});