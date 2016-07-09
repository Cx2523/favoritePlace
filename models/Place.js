'use strict';

// Dependencies
var mongoose = require('mongoose');

// Mongoose schema
var Schema = mongoose.Schema;

var placeSchema = new Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	zip: { type: String, required: true }
});

module.exports = mongoose.model('Place', placeSchema);
