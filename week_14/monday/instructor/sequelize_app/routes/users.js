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
router.post('/', function(req, res, next) {
  console.log(req.body)
    const params = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
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
