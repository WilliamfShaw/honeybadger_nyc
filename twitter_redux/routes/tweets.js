var express = require('express');
var router = express.Router();
var Tweet = require('../models').tweet;
//INDEX
router.get('/', function (req, res) {
    Tweet.findAll().then(function(tweets) {
        res.send(tweets);
    });
});
//SHOW
//CREATE
router.post('/', function(req, res) {
    Tweet.create(req.body)
        .then(function(tweet) {
            res.send(tweet);
        });
});
//UPDATE
//DESTROY

module.exports = router;
