'use strict';

// Model
var User = require('../models/User');

function create(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
}

function read(req, res) {
  User
  .findOne({_id: req.params.userId})
  .populate('favorite_places', 'name')
  .exec(function(err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
}

function update(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$push: {favorite_places: req.body}}, function(err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
}

function destroy(req, res) {
  User.findByIdAndRemove(req.params.userId, function(err, user) {
    if (err) res.status(500).send(err);
    else res.send(result);
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user)
    }
  });
}

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: destroy
};
