'use strict';

// Model
var Place = require('../models/Place');

function create(req, res) {
  var newPlace = new Place(req.body);
  newPlace.save(function(err, place) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(place);
    }
  });
}

function read(req, res) {
  Place
  .find()
  .exec(function(err, places) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(places);
    }
  });
}

function update(req, res) {
  Place.findByIdAndUpdate(req.params.placeId, req.body, function(err, place) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(place);
    }
  });
}

function destroy(req, res) {
  Place.findByIdAndRemove(req.params.placeId, function(err, place) {
    if (err) res.status(500).send(err);
    else res.send(result);
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(place)
    }
  });
}

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: destroy
};
