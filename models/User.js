'use strict';

// Dependencies
var mongoose = require('mongoose');
var Place = require('./Place');

// Mongoose schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	favorite_places: [{ type: Schema.Types.ObjectId, ref: 'Place'}]
});

module.exports = mongoose.model('User', userSchema);
