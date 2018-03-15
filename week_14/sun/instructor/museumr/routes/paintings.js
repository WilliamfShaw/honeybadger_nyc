var express = require('express');
var router = express.Router();
const Painting = require('../models/index').painting;

router.get('/', async function(req, res) {
    const paintings = await Painting.findAll();
    res.send(paintings);
});

// SHOW
router.get('/:id', function(req, res) {
    Painting.findById(req.params.id)
        .then(function(painting) {
            res.send(painting);
        });
});

// CREATE
router.post('/', function(req, res) {
    const { title, img_url, year_made, artist_id } = req.body;
    const params = {
        title,
        img_url,
        year_made,
        artist_id
    }

    Painting.create(params)
        .then(function(painting) {
            res.send(painting);
        });
})

module.exports = router;
