'use strict';

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

// Configuration
var config = require('./config');

// Controllers
var userCtrl = require('./controllers/userCtrl');
var placeCtrl = require('./controllers/placeCtrl');

// Express
var app = express();

// Middelware
app.use('/', bodyParser.json());
app.use('/', morgan('dev'));
app.use('/', cors());

// Routes

// Users
app.post('/api/users', userCtrl.create);
app.get('/api/users/:userId', userCtrl.read);
app.put('/api/users/:userId', userCtrl.update);
app.delete('/api/users/:userId', userCtrl.delete);

// Places
app.post('/api/places', placeCtrl.create);
app.get('/api/places', placeCtrl.read);
app.put('/api/places/:placeId', placeCtrl.update);
app.delete('/api/places/:placeId', placeCtrl.delete);

// Connection to database
mongoose.connect(config.uri, function(err) {
  if (err) {
    console.log('Connection to MongoDB failed!');
  } else {
    console.log('Connected to MongoDB at: ', config.uri);
  }
});

// Connection to server
app.listen(config.port, function(err) {
	if(err) {
		console.log('Connection to Node Server failed!');
	} else {
		console.log('Express listening on port ' + config.port + '!');
	}
});
