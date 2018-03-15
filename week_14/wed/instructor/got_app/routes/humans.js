var express = require('express');
var router = express.Router();
const Human = require('../models/index').human;

function getBodyParams({ name, age, status, portrait }) {
    return {
        name,
        age,
        status,
        portrait
    }
}

// INDEX
router.get('/', function(req, res) {
    Human.findAll()
        .then(function(humans) {
            res.send(humans);
        });
});

// SHOW
router.get('/:id', function(req, res) {
    Human.findById(req.params.id)
        .then(function(human) {
            res.send(human);
        });
});

// CREATE
router.post('/', function(req, res) {
    Human.create(getBodyParams(req))
        .then(function(human) {
            res.send(human);
        });
});

// UPDATE
router.put('/:id', function(req, res) {
    Human.findById(req.params.id)
        .then(function(human) {
            human.update(getBodyParams(req))
                .then(function(updatedHuman) {
                    res.send(updatedHuman);
                })
        })
});

// DESTORY
router.delete('/:id', function(req, res) {
    Human.findById(req.params.id)
        .then(function(human) {
            human.destroy();
            console.log('HUMAN DESTROYED');
        });
});

module.exports = router;
