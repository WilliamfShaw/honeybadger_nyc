var express = require('express');
var router = express.Router();
var Tweed = require('../models/index').tweeds;

// INDEX
router.get('/', function(req, res) {
  Tweed.findAll().then(function(tweeds) {
    res.send(tweeds);
  });
});

// CREATE
router.post('/', function(req, res) {
  Tweed.create(req.body).then(function(tweed) {
    res.send(tweed);
  });
});

// DELETE

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  Tweed.findById(id).then(function(tweed) {
    tweed.destroy();
    res.send(`Tweed ${id} destroyed`);
  });
});

module.exports = router;
