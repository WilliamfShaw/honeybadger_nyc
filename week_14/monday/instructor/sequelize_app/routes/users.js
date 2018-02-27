var express = require('express');
var router = express.Router();
const User = require('../models/index').user;

router.get('/', function(req, res) {
    User.findAll()
      .then(function(users) {
        res.send(users);
      })
});

router.get('/:id', function (req, res) {
    User.findById(req.params.id)
      .then(function(user) {
        res.send(user);
      })
});

/* GET users listing. */
router.get('/:first_name/:last_name/:email', function(req, res, next) {
    const params = {
      firstName: req.params.first_name,
      lastName: req.params.last_name,
      email: req.params.email
    };

    User.create(params)
      .then(function(user) {
        res.send(user);
      });
});

router.get('/update/:id', function(req, res) {
    User.findById(req.params.id)
      .then(function(user) {
          user.update({firstName: 'Will', lastName: 'Shaw', email: 'cool'})
            .then(function(user) {
              res.send(user);
            });
      });
});

router.get('/destroy/:id', function(req, res) {
    User.findById(req.params.id)
      .then(function(user) {
          user.destroy();
          res.send('user destroyed');
      });
});


module.exports = router;
